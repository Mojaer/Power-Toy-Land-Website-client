import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    const { user, userLogout } = useContext(AuthContext)


    const handleLogout = () => {
        userLogout();

    }
    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-[#101826]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to='/' className="flex items-center">
                        <img src="/power_toy_land.png" className="h-10 w-40 mr-3" alt="super toy land Logo" />
                    </NavLink>
                    <div className="flex md:order-2">
                        {user ?
                            <div className="dropdown dropdown-bottom dropdown-end ">
                                <label tabIndex={0} className="btn w-24 overflow-hidden "><img src={user.photoURL} className="w-full" title={user.displayName} alt="image" /></label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow  rounded-box w-52">
                                    <li><button className="btn" onClick={handleLogout}>Logout</button> </li>
                                </ul>
                            </div>
                            : <Link to='/login' type="button" className="text-white mr-9 md:mr-0">Login</Link>}


                        <button type="button" onClick={() => setDropdown(!dropdown)} className={`inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2  ${dropdown ? 'ring-blue-400' : ''} `} aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                        </button>
                    </div>

                    <div className={`items-center justify-between toggler ${dropdown ? 'text-center show' : 'hidden '} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <NavLink to='/' className="block py-2 pl-3 pr-4 text-white md:p-0 ">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/allusertoys' className="block py-2 pl-3 pr-4 text-white md:p-0">All Toys</NavLink>
                            </li>
                            {
                                user && <li>
                                    <NavLink className="block py-2 pl-3 pr-4 text-white md:p-0">My Toys</NavLink>
                                </li>
                            }
                            {user && <li>
                                <NavLink to='/addtoy' className="block py-2 pl-3 pr-4 text-white md:p-0">Add A Toy</NavLink>
                            </li>}
                            <li>
                                <NavLink to='/blogs' className="block py-2 pl-3 pr-4 text-white md:p-0">Blogs</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;