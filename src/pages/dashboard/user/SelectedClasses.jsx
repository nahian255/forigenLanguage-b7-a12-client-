import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['class-selected'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/class-selected/${user?.email}`)
            return res.data
        }
    });

    // class delete
    const handelDelet = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fress-server.vercel.app/class/${user._id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };



    return (
        <div>
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

                                                <th>Seats</th>
                                                <th>Price</th>
                                                <th>Pay</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users?.map(user => (
                                                    // console.log(user)
                                                    <tr key={user?._id}>
                                                        <th>1</th>
                                                        <td>
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={user?.item?.data?.imgUrl
                                                                    } />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{user?.item?.data?.className}</td>
                                                        <td>{user?.item?.instructorName}</td>

                                                        <td>{user?.item?.data?.seats}</td>
                                                        <td>{user?.item?.data?.price}</td>
                                                        <td><Link to='/dashboard/payment'>
                                                            <button
                                                                className='btn btn-secondary' >Pay</button></Link>
                                                        </td>
                                                        <td><button
                                                            onClick={() => handelDelet(user)}
                                                            className='btn btn-error'>Delete</button>
                                                        </td>

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
        </div>
    );
};

export default SelectedClasses;