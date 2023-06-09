import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SelectedClasses = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['class-selected'],
        queryFn: async () => {
            const res = await axiosSecure.get('/class-selected')
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
                fetch(`http://localhost:3000/class/${user._id}`, {
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
                                                                    <img src={user?.data.imgUrl
                                                                    } />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{user?.data.className}</td>
                                                        <td>{user?.instructorName}</td>

                                                        <td>{user?.data.seats}</td>
                                                        <td>{user?.data.price}</td>
                                                        <td><button
                                                            className='btn btn-secondary' >Pay</button>
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