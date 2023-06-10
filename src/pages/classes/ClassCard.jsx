import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ClassCard = ({ item, index }) => {

    const { user } = useContext(AuthContext)
    const { className, imgUrl, seats, price } = item.data
    const [disabledButtons, setDisabledButtons] = useState([]);

    // btn disable condition..
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const isButtonDisabled = isAdmin || isInstructor || seats == 0;

    // avalible set when 0 
    const cardStyle = {
        backgroundColor: seats == 0 ? 'red' : 'white',
    };

    // selected a class
    const handelSelectedClass = (item) => {
        if (!user) {
            return alert('Please login first')
        }
        //  btn disable
        setDisabledButtons((prevDisabledButtons) => {
            const updatedDisabledButtons = [...prevDisabledButtons];
            updatedDisabledButtons[index] = true;
            return updatedDisabledButtons;
        });

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
        <div style={cardStyle}>
            <div className="card w-96  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{className}</h2>
                    <h3> Instracturo Name : {item?.instructorName}</h3>
                    <h3> Avaliable seats : {seats}</h3>
                    <h3> Price : {price}</h3>
                    <div className="card-actions my-4">
                        {
                            isButtonDisabled ?
                                <>
                                    <button
                                        disabled={isButtonDisabled}
                                        onClick={() => handelSelectedClass(item)} className="btn btn-primary">Selected Class
                                    </button>
                                </> :
                                <>
                                    <button
                                        disabled={disabledButtons[index]}
                                        onClick={() => handelSelectedClass(item)} className="btn btn-primary">Selected Class
                                    </button>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;