import { Link } from "react-router-dom";


const UserLogin = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }


    return (
        <div className="mt-10 mx-10 h-screen">
            <form className=" w-full" onSubmit={handleLogin}>
                <h1 className="text-5xl font-semibold mx-auto w-2/3">Please login </h1>
                <div className="my-7 w-2/3 mx-auto">
                    <label htmlFor="email-address-icon" className="ms-1 block mb-2 text-md font-medium text-white ">Your Email</label>
                    <input type="email" name="email" id="email-address-icon" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-2/3 pl-10 p-2.5 " placeholder="name@domain.com" required />
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <label htmlFor="email-address-icon" className="ms-1 block mb-2 text-md font-medium text-white ">Password</label>
                    <input type="password" name="password" id="email-address-icon" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg  block w-2/3 pl-10 p-2.5" placeholder="Password" required />
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <input className="btn bg-lime-900 text-lg font-bold" type="submit" value='login' />
                    <p className="ms-1">Do not have an account, Please <Link className="text-success text-lg" to='/register' >Register</Link> </p>
                </div>
                <div className="my-7 w-2/3 mx-auto">
                    <button className="btn bg-sky-700 px-5">Login with google</button>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;