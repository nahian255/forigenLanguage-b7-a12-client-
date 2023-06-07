import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            // console.log(res.data);
            return res.data
        }
    });

    // make admin ...
    const handelAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(data => {
                console.log(data)
                if (data?.data?.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin create Succesful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    };

    // make instructor ...
    const handelInstructor = (id) => {
        axiosSecure.patch(`/users/instructor/${id}`)
            .then(data => {
                console.log(data)
                if (data?.data?.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'instructor create Succesful',
                        showConfirmButton: false,
                        timer: 1500
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
                                            <th>Name</th>
                                            <th>Job</th>
                                            <th>role</th>
                                            <th>role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map(user => (
                                                <tr key={user?._id}>
                                                    <th>1</th>
                                                    <td>{user?.name}</td>
                                                    <td>{user?.email}</td>
                                                    <td>{user.role === 'admin' ? "admin" : <button
                                                        onClick={() => handelAdmin(user?._id)} className="btn  btn-secondary">Make Admin</button>
                                                    }</td>
                                                    <td>{user.role === 'instructor' ? "instructor" : <button
                                                        onClick={() => handelInstructor(user?._id)} className="btn  btn-secondary">Make Instructor</button>
                                                    }</td>


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

export default ManageUsers;