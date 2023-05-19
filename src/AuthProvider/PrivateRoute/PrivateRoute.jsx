import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import { Vortex } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

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
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;