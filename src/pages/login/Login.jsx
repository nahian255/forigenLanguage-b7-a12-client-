import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
import Swal from 'sweetalert2'
import { saveUser } from "../../api/auth";
// import { saveUser } from "../../api/auth";


const Login = () => {

    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email
        const pass = data.password
        loginUser(email, pass)
            .then(result => {
                const currentUser = result.user
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(currentUser);
                navigate(from, { replace: true })
            })
            .catch((err) => {
                setError(err)
            });
    };

    const handelGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                saveUser(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                console.log(result);
            }).catch()
    };


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                name='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <p>{error}</p>
                            {errors.email && <span className="text-red-400 mt-2">Email is required</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                {...register("password", {
                                    required: true,

                                })}
                                type='password'
                                name='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-400 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-orange-200 w-full rounded-md py-3 text-white'
                        >
                            Continue
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-oranbg-orange-200 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handelGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />
                    <p >Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don t have an account yet?{' '}
                    <Link
                        to='/register'
                        className='hover:underline hover:text-orange-200 text-gray-600'
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;