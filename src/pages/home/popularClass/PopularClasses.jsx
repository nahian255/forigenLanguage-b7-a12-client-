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
            <h1 className="text-center text-4xl">Popular Classes</h1>
            <div className='flex flex-row flex-wrap gap-14 mt-8 mb-28'>
                {
                    popularClasses?.map(item => <ClassCard key={item?._id} item={item}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;