import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'



const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div>


            <nav className="bg-black">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to='/' className="flex items-center">
                        <img src="/power_toy_land.png" className="h-10 w-40 mr-3" alt="super toy land Logo" />
                    </NavLink>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        <button type="button" onClick={() => setDropdown(!dropdown)} className={`inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2  ${dropdown ? 'ring-blue-400' : ''} `} aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between toggler ${dropdown ? 'text-center show' : 'hidden '} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black">
                            <li>
                                <NavLink to='/' className="block py-2 pl-3 pr-4 text-white md:p-0 ">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 pl-3 pr-4 text-white md:p-0">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 pl-3 pr-4 text-white md:p-0">Services</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 pl-3 pr-4 text-white md:p-0">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;