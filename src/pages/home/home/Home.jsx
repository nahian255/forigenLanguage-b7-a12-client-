import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const Home = () => {

    const [axiosSecure] = useAxiosSecure()

    // axios.get('http://localhost:3000/first')
    //     .then(data => console.log(data.data))

    const { data: room = [] } = useQuery({
        queryKey: ['first'],
        queryFn: async () => {
            const res = await axiosSecure.get('/first')
            // console.log(res.data);
            return res.data
        }
    })

    console.log(room);
    // axiosSecure.get('/first').then(data => console.log(data.data))

    return (
        <div>

            <h1>it fack</h1>

        </div>
    );
};

export default Home;