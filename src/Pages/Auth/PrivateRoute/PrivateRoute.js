import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useFirebase from './../../../Hooks/useFirebase';
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
    let location = useLocation();
    const { user, isLoading } = useFirebase();

    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;