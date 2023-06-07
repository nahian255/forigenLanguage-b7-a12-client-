// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Banner from '../banner/Banner';
import Slider from '../Top slider/Slider';


const Home = () => {

    // const [axiosSecure] = useAxiosSecure()

    // axios.get('http://localhost:3000/first')
    //     .then(data => console.log(data.data))

    // const { data: room = [] } = useQuery({
    //     queryKey: ['first'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/first')
    //         // console.log(res.data);
    //         return res.data
    //     }
    // })

    // axiosSecure.get('/first').then(data => console.log(data.data))

    return (
        <div>
            <Banner></Banner>
            <div className='my-24 '>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;