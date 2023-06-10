import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ClassCard from '../../classes/ClassCard';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], } = useQuery({
        queryKey: ['approved-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/approved-classes')
            return res.data
        }
    });
    const popularClasses = users?.slice(0, 6)

    return (
        <div>
            <div>
                <h1 className="text-orange-400 text-4xl my-2 -mt-10 text-center">Popular Classes Here</h1>
                <p className='text-center mb-4'> Language classes provide a structured and systematic approach to learning a new language. They follow a curriculum that is designed to gradually introduce and reinforce language skills, including listening, speaking, reading, and writing. This structure helps learners progress in a logical and organized manner.</p>
            </div>
            <div className='flex flex-row flex-wrap gap-14 mt-8 mb-28'>
                {
                    popularClasses?.map(item => <ClassCard key={item?._id} item={item}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;