import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import UserLogin from "../UserAccount/UserLogin/UserLogin";
import UserRegistration from "../UserAccount/UserRegistration/UserRegistration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <UserLogin></UserLogin>,
            },
            {
                path: "/register",
                element: <UserRegistration></UserRegistration>,
            }
        ]
    },

    {
        path: "*",
        element: <div className="text-center h-screen pt-10 bg-black">
            <button><Link to='/'
                className="text-white bg-red-700 border focus:outline-none hover:bg-red-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Go back to home</Link></button>
            <img
                className="mx-auto w-full my-10"
                src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="404 NOT FOUND" />
        </div>,
    }
]);

export default router;