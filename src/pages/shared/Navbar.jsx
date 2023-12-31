import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext)


    const li = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/Instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>

        {/* <li><Link to='/register'> SingUp</Link></li> */}

        {
            user ?
                <>
                    {/* profile img div */}
                    <li><Link to='/dashboard'>Dashboard</Link></li>


                    <div className="avatar">
                        <div className="w-11 rounded-full">
                            <img src={user.photoURL} />

                        </div>
                    </div>
                </>
                :
                <>
                    <li><Link to='/login'> Login</Link></li>
                </>
        }

        {/* {
            user ? <li><Link onclick={hadelSingOut}> SingOut</Link></li> : <li><Link to='/login'> Login</Link></li>

        } */}
    </>
    return (
        <>
            <div className="navbar bg-blue-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {li}
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://images-platform.99static.com//KGd88P6vZjBapDkCjT_nUuIi72w=/249x246:749x746/fit-in/500x500/99designs-contests-attachments/104/104124/attachment_104124900" />
                        </div>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">WorldSpeak Language Safari</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;