import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// import Logo from '../Shared/Navbar/Logo'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { AuthContext } from '../../provider/AuthProvider'
import Swal from 'sweetalert2'
import useAdmin from '../../hooks/useAdmin'
import useInstructor from '../../hooks/useInstructor'
import { FaBeer } from 'react-icons/fa';
import { BiHome } from 'react-icons/Bi';
import { SiGoogleclassroom } from 'react-icons/Si';
import { BiMessageAltAdd } from 'react-icons/Bi';


const Sidebar = () => {
    const navigate = useNavigate()
    // const [toggle, setToggle] = useState(false)
    const { user, singOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()


    const [isActive, setActive] = useState('false')



    const hadelSingOut = () => {

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User Singout',
            showConfirmButton: false,
            timer: 1500
        })
        singOut().then(() => {
            // Sign-out successful.
            navigate('/login')
        }).catch(() => {
            // An error happened.
        });
    };

    return (
        <>
            {/* Small Screen Navbar */}
            <div className=' text-gray-800 flex justify-between md:hidden'>

                <button
                    // onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-orange-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        {/* <div className='w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto'>
                        </div> */}
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <div>
                                {
                                    !isAdmin ? (isInstructor ? <>
                                        <NavLink
                                            to='/dashboard/add-class'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-orange-200   hover:text-orange-100 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <BiMessageAltAdd className='w-5 h-5' />
                                            <span className='mx-4 font-medium'> Add Class</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-classes'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-orange-200   hover:text-orange-100 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium'> My Classes</span>
                                        </NavLink>
                                    </> : <>

                                        <NavLink
                                            to='/dashboard/selected-classes'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-orange-200   hover:text-orange-100 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <SiGoogleclassroom className='w-5 h-5' />
                                            <span className='mx-4 font-medium'> Selected Classes</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/enrolled-classes'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-orange-200   hover:text-orange-100 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium'> Enrolled Classes</span>
                                        </NavLink>
                                    </>)
                                        :
                                        (
                                            <>
                                                <NavLink
                                                    to='/dashboard/manage-classes'
                                                    className={({ isActive }) =>
                                                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-orange-300   hover:text-blue-200 ${isActive ? 'bg-orange-300  text-blue-200' : 'text-gray-600'
                                                        }`
                                                    }
                                                >

                                                    <FaBeer /> <span className='mx-4 font-medium'>Manage Classes</span>
                                                </NavLink>
                                                <NavLink
                                                    to='/dashboard/manage-users'
                                                    className={({ isActive }) =>
                                                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-orange-300   hover:text-blue-200 ${isActive ? 'bg-orange-300  text-blue-200' : 'text-gray-600'
                                                        }`
                                                    }
                                                >
                                                    <span className='mx-4 font-medium'>Manage Users</span>
                                                </NavLink>
                                            </>
                                        )

                                }
                            </div>
                            <>
                                {/* Menu Links */}
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-orange-300  text-gray-500' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    {/* <BsFillHouseAddFill className='w-5 h-5' /> */}
                                    <BiHome className='w-5 h-5' />
                                    <span className='mx-4 font-medium'>Home</span>
                                </NavLink>


                            </>
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <button
                        onClick={hadelSingOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;