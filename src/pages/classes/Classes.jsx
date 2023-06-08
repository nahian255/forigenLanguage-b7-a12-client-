import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Classes = () => {

    const [axiosSecure] = useAxiosSecure()


    const { data: users = [], refetch } = useQuery({
        queryKey: ['approved-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/approved-classes')
            return res.data
        }
    });

    console.log(users);

    return (
        <div>
            <h1>classesssssssss</h1>
        </div>
    );
};

export default Classes;