import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </>
    }

    else if (user) {
        return <>{children}</>
    }

    else {
        <Navigate to='/login'></Navigate>
    }


    return (
        <div>

        </div>
    );
};

export default PrivateRoute;