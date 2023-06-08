import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {

    const { user } = useContext(AuthContext)
    const userName = user.displayName;
    const usrEmail = user.email
    console.log(userName, usrEmail);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const classInfo = {
            data,
            instructorName: userName,
            instructorEmail: usrEmail
        }
        console.log(classInfo)
        fetch(`http://localhost:3000/insturctor-class`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(classInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added Waiting for Admin appobale',
                        showConfirmButton: false,
                        timer: 2000
                    })

                }
            })
    };



    return (
        <div>
            <h1 className="text-2xl">Please Add Your Class here..</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="my-8">
                    <label htmlFor="" className='block mb-2 text-sm'>
                        Class Name
                    </label>
                    <input
                        {...register("class-name", { required: true })}
                        type="text" placeholder="class name" className="input input-bordered input-warning w-full " />
                </div>
                <div>
                    <label htmlFor="" className='block mb-2 text-sm'>
                        Class Image
                    </label>
                    <input
                        {...register("img-url", { required: true })}
                        type="text" placeholder="img-url" className="input input-bordered input-warning w-full " />
                </div>
                <div className="my-8">
                    <label htmlFor="" className='block mb-2 text-sm'>
                        Available seats
                    </label>
                    <input
                        {...register("seats", { required: true })}
                        type="text" placeholder="seats" className="input input-bordered input-warning w-full " />
                </div>
                <div>
                    <label htmlFor="" className='block mb-2 text-sm'>
                        Price
                    </label>
                    <input
                        {...register("price", { required: true })}
                        type="text" placeholder="price" className="input input-bordered input-warning w-full " />
                </div>


                <input type="submit" />
            </form>
        </div>
    );
};

export default AddClass;