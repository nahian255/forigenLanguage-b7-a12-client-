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
            <div>
                <h1 className="text-orange-400 text-4xl my-2 -mt-10 text-center">Popular Instrucrtor Here</h1>
                <p className='text-center mb-4'> Instruction provides learners with clear guidance and direction in their language learning journey. A skilled instructor can outline learning objectives, establish a curriculum, and create a roadmap for learners to follow. This structure helps students stay focused, motivated, and on track towards their language learning goals.</p>
            </div>
            <div className='flex flex-row flex-wrap gap-14'>
                {
                    newUsers?.map(item => <InstructorCard key={item?._id} item={item}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInst;