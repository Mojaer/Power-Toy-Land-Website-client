import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const UserRegistration = () => {

    const { user, userRegistrations, profileUpdate, googleSignIn } = useContext(AuthContext)
    // console.log(userRegistrations, user)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgUrl = form.url.value;

        userRegistrations(email, password, name, imgUrl)
            .then(() => {
                profileUpdate(name, imgUrl)
                Swal.fire({
                    icon: 'success',
                    title: 'You are successfully Registered',
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: `${error.message}`,
                })
            })
    }

    const handleGoogleSignIn = () => {
        return googleSignIn()
    }



    return (
        <div className="mt-10 mx-10 ">
            <form className=" w-full h-full " onSubmit={handleRegister}>
                <h1 className="text-5xl font-semibold mx-auto w-2/3">Please Register </h1>
                <div className="my-7 w-2/3 mx-auto">
                    <label htmlFor="email-address-icon" className="ms-1 block mb-2 text-md font-medium text-white ">Name</label>
                    <input type="text" name="name" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-2/3 pl-5 p-2.5 " placeholder="name" required />
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <label htmlFor="email-address-icon" className="ms-1 block mb-2 text-md font-medium text-white ">Your Email</label>
                    <input type="email" name="email" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-2/3 pl-5 p-2.5" placeholder="name@domain.com" required />
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <label htmlFor="email-address-icon" className="ms-1 block mb-2 text-md font-medium text-white ">Password</label>
                    <input type="password" name="password" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-2/3 pl-5 p-2.5" placeholder="Password" required />
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <label htmlFor="email-address-icon" className="ms-1 block mb-2 text-md font-medium text-white ">Image Url</label>
                    <input type="url" name="url" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg  block w-2/3 pl-5 p-2.5" placeholder="Image url" />
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <input className="btn bg-lime-900 text-lg font-bold" type="submit" value='Register' />
                    <p className="ms-1">Already have an account, please <Link className="text-success text-lg" to='/login' >Login</Link> </p>
                </div>
                <div className="py-5 w-2/3 mx-auto">
                    <button className="btn bg-sky-700 px-5 font-semibold text-lg" onClick={handleGoogleSignIn}>Login with google</button>
                </div>
            </form>
        </div>
    );
};

export default UserRegistration;