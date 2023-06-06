import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { singOut, user } = useContext(AuthContext)

    console.log(user);

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
        }).catch(() => {
            // An error happened.
        });
    };


    const li = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/art'>Ant</Link></li>
        <li><Link to='/register'> SingUp</Link></li>

        {
            user ?
                <>
                    <button className='mx-2' onClick={hadelSingOut}>Logout</button>
                    {/* profile img div */}
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
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {li}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>another thing</Link>
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;