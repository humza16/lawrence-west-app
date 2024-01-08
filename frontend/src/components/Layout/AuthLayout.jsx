import { Outlet, Navigate } from "react-router-dom";
import Loader from 'components/Loader';
import useAuth from 'shared/Auth/useAuth';

const AuthLayout = () => {
    const { isLoading, authenticated } = useAuth();

    return isLoading ? (
        <Loader />
    ) : authenticated ? (
        <Navigate to="/" />
    ) : (
        <Outlet />
    );
};

export default AuthLayout;
