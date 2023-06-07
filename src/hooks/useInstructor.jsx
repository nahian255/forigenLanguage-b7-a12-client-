import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from '../hooks/useAxiosSecure';

const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()


    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log(res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;