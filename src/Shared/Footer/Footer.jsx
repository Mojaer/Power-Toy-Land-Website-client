import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-slate-900 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 w-full">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase ">Address</h2>
                            <ul className="text-gray-400  font-medium">
                                <li className="mb-4">
                                    <p >123 Karwan Bazar</p>
                                </li>
                                <li>
                                    <p >Dhaka, Bangladesh</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Contact</h2>
                            <ul className="text-gray-400  font-medium">
                                <li className="mb-4">
                                    <p>+880123455656</p>
                                </li>
                                <li>
                                    <p>no@nomail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <p className="flex items-center">
                            <img src='/public/power_toy_land.png' className="h-8 mr-3 w-full" alt=" Logo" />
                        </p>
                    </div>

                </div>
                <hr className="my-3 border-gray-300 sm:mx-auto  lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a className="text-blue-300 hover:text-gray-300 cursor-pointer text-3xl ">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a className="text-red-600 hover:text-gray-400 cursor-pointer text-3xl  ">
                            <FaInstagram></FaInstagram>

                        </a>
                        <a className="text-blue-300 hover:text-gray-400 cursor-pointer text-3xl ">

                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a className="text-green-300 hover:text-blue-600 cursor-pointer text-3xl ">
                            <FaWhatsapp></FaWhatsapp>
                        </a>
                        <a className="text-gray-300 hover:text-blue-600 cursor-pointer text-3xl ">

                        </a>
                    </div>
                    <span className="text-sm text-gray-300 sm:text-center ">© 2023 <a>Power Toy Land</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;