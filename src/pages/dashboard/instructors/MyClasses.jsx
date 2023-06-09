import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';



const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['manage-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manage-classes/${user.email}`)
            return res.data
        }
    });
    console.log(users);


    return (
        <div>
            <h1>Show All Classes that you add</h1>
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
                                                users?.map(user => (
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
                                                            className='btn btn-secondary' onClick={() => handelAprov(user)}>Approved</button></td>
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
        </div>
    );
};

export default MyClasses;