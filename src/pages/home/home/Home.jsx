import useAxiosSecure from '../../../hooks/useAxiosSecure';


const Home = () => {

    const [axiosSecure] = useAxiosSecure()

    // axios.get('http://localhost:3000/first')
    //     .then(data => console.log(data.data))

    axiosSecure.get('/first').then(data => console.log(data.data))

    return (
        <div>

            <h1>it fack</h1>

        </div>
    );
};

export default Home;