import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';


const ManageClasses = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);

    // query data....
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['manage-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manage-classes')
            return res.data
        }
    });


    // aproveted by admin
    const handelAprov = (user, index) => {
        //  btn disable
        setDisabledButtons((prevDisabledButtons) => {
            const updatedDisabledButtons = [...prevDisabledButtons];
            updatedDisabledButtons[index] = true;
            return updatedDisabledButtons;
        });

        fetch(`https://fress-server.vercel.app/admin-aprove-class`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added by Admin ',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    refetch()

                }
            })
    };


    return (
        <>
            {
                users && users.length > 0 ?
                    <>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Class Img</th>
                                            <th>Class Name</th>
                                            <th>Instructor Name</th>
                                            <th>Instructor Email</th>
                                            <th>Seats</th>
                                            <th>Price</th>
                                            <th>Pending</th>
                                            <th>Approved</th>
                                            <th>Denied</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users?.map((user, index) => (
                                                // console.log(user)
                                                <tr key={user?._id}>
                                                    <th>1</th>
                                                    <td>
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={user?.data.imgUrl
                                                                } />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{user?.data.className}</td>
                                                    <td>{user?.instructorName}</td>
                                                    <td>{user?.instructorEmail}</td>
                                                    <td>{user?.data.seats}</td>
                                                    <td>{user?.data.price}</td>
                                                    <td><button
                                                        className='btn btn-secondary'
                                                        disabled={disabledButtons[index]}
                                                        onClick={() => handelAprov(user, index)}>Approved</button></td>
                                                    {/* <td>{user?.data?.class - name}</td> */}
                                                    {/* <td>{user.role === 'admin' ? "admin" : <button
                                                        onClick={() => handelAdmin(user?._id)} className="btn  btn-secondary">Make Admin</button>
                                                    }</td>
                                                    <td>{user.role === 'instructor' ? "instructor" : <button
                                                        onClick={() => handelInstructor(user?._id)} className="btn  btn-secondary">Make Instructor</button>
                                                    }</td> */}


                                                </tr>
                                            ))
                                        }
                                        <tr>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>

                        </div>
                    </> :
                    <>
                        <p>this is empty</p>
                    </>
            }
        </>
    );
};

export default ManageClasses;