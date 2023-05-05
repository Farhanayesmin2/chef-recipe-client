
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';




const PrivateRoute = ({children}) => {
    const {user, loading,Spinner} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return Spinner();
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;