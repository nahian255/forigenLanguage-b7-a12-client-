import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";

const imgToken = import.meta.env.VITE_Img_key;

const Register = () => {

    const { createUser, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [err, setErr] = useState('')

    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostinUrl = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const onSubmit = data => {
        const email = data?.email
        const pass = data?.password
        const conPass = data?.confirmPassword
        const name = data?.name
        console.log(data)

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(imgHostinUrl, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes?.data?.display_url;
                    // todo.....
                    // if (!pass == conPass) {
                    //     return setErr('confirm password not match')
                    // }
                    createUser(email, pass)
                        .then((userCredential) => {
                            // Signed in 
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'SingUp Succesful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const user = userCredential.user;
                            saveUser(user, name, imgURL)
                            navigate('/')
                            // ...
                        })
                    console.log(imgURL, email, pass)
                }
            })


    };

    // login with google
    const handelGoogle = () => {
        loginWithGoogle()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
                const user = result.user;
                saveUser(user)
                navigate(from, { replace: true })
                console.log(result);
            }).catch()
    };


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    {/* todo : ......... */}
                    <p className='text-sm text-gray-400'>Welcome to ...........</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder=" name"
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'

                            />
                        </div>

                        {/* Image field */}

                        <div>
                            <label className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                {...register("image", { required: true })}
                                type="file"
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'

                            />
                        </div>

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                name='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
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
                                    // pattern: /^[A-Za-z]+$/i
                                })}
                                type='password'
                                name='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />

                            {/* {errors.password?.type === 'pattern' && <span className="text-red-400 mt-2">password is required</span>} */}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Confrim Password
                                </label>
                            </div>
                            <input
                                {...register("confirmPassword", { required: true })}
                                type='password' placeholder="Confrim password"
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                            <p>{err}</p>
                            {/* {errors.password?.type === 'pattern' && <span className="text-red-400 mt-2">password is required</span>} */}
                        </div>
                    </div>

                    <div>
                        {/* <input type="submit" /> */}
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            Continue
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handelGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />
                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;