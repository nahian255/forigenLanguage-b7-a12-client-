import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import InstructorCard from '../../Instructors/InstructorCard';

const PopularInst = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/instructor')
            return res.data
        }
    });
    const newUsers = users.slice(0, 6)

    return (
        <div>
            <h1 className="text-4xl text-center">See our best Instructor..</h1>
            <div className='flex flex-row flex-wrap gap-14'>
                {
                    newUsers?.map(item => <InstructorCard key={item?._id} item={item}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInst;