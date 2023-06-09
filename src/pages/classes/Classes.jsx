import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ClassCard from './ClassCard';

const Classes = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], } = useQuery({
        queryKey: ['approved-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/approved-classes')
            return res.data
        }
    });

    console.log(users);

    return (
        <div className='mt-20'>
            <div className='flex flex-row flex-wrap gap-14'>
                {
                    users?.map(item => <ClassCard key={item?._id} item={item}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;