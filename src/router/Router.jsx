import {
    Link,
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
// import Private from "./Private";
import Instructord from "../pages/Instructors/Instructord";
import Classes from "../pages/classes/Classes";
import DashboardLayout from "../layout/DashboardLayout";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import EnrolledClasses from "../pages/dashboard/user/EnrolledClasses";
import SelectedClasses from "../pages/dashboard/user/SelectedClasses";
import AddClass from "../pages/dashboard/instructors/AddClass";
import MyClasses from "../pages/dashboard/instructors/MyClasses";
import Payment from "../pages/dashboard/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'Instructors',
                element: <Instructord></Instructord>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />

            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/manage-classes',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/selected-classes',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: '/dashboard/enrolled-classes',
                element: <EnrolledClasses />
            },
            {
                path: '/dashboard/add-class',
                element: <AddClass />
            },
            {
                path: '/dashboard/my-classes',
                element: <MyClasses />
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>,
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <Link to='/'><button className="btn btn-ghost">Go Back</button></Link>
            <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="" />
        </div>
    }
]);

