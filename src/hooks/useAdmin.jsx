import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from '../hooks/useAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;