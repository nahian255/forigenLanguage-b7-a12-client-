import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'https://fress-server.vercel.app',
});


const useAxiosSecure = () => {


    return [axiosSecure]
};

export default useAxiosSecure;