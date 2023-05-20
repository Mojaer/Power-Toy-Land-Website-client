import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import Swal from "sweetalert2";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();


    if (loading) {
        return <div className="h-screen w-1/4 mx-auto pt-30">
            <Vortex
                visible={true}
                height="200"
                width="200"
                ariaLabel="vortex-loading"
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    }

    else if (user) {
        return <>{children}</>
    }

    else {
        Swal.fire({
            icon: 'error',
            title: 'Please Login',
            text: 'You have to log in first to view details',

        })
        return <>
            <Navigate to='/login' state={{ from: location }}></Navigate>
        </>
    }

};

export default PrivateRoute;