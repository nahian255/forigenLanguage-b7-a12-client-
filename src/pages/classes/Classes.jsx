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
            <div>
                <h1 className="text-orange-400 text-4xl my-2 -mt-10 text-center">All Classes Here</h1>
                <p className='text-center mb-4'> Language classes provide a structured and systematic approach to learning a new language. They follow a curriculum that is designed to gradually introduce and reinforce language skills, including listening, speaking, reading, and writing. This structure helps learners progress in a logical and organized manner.</p>

            </div>
            <div className='flex flex-row flex-wrap gap-14'>
                {
                    users?.map((item, index) => <ClassCard key={item?._id} item={item} index={index}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;