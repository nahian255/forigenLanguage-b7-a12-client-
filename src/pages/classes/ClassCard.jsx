import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ClassCard = ({ item }) => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const { className, imgUrl, seats, price } = item.data

    // selected a class
    const handelSelectedClass = (item) => {
        const sentdata = {
            item: item,
            userEmail: user.email
        }
        fetch(`https://fress-server.vercel.app/class-selected`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(sentdata)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Selected',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
    };

    return (
        <div>
            <div className="card w-96  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{className}</h2>
                    <h3> Instracturo Name : {item?.instructorName}</h3>
                    <h3> Avaliable seats : {seats}</h3>
                    <h3> Price : {price}</h3>

                    {/* todo ........ */}
                    <div className="card-actions my-4">
                        {/* {
                            isAdmin && isInstructor ? <><p>admin</p></> : <> 0</>
                        } */}
                        <button onClick={() => handelSelectedClass(item)} className="btn btn-primary">Selected Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;