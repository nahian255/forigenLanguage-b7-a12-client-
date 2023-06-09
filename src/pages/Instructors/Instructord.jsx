import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import InstructorCard from './InstructorCard';

const Instructord = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/instructor')
            return res.data
        }
    });

    console.log(users);


    return (
        <div className='mt-20'>
            <div className='flex flex-row flex-wrap gap-14'>
                {
                    users?.map(item => <InstructorCard key={item?._id} item={item}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructord;