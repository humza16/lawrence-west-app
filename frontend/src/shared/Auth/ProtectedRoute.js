import { Outlet, Navigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Loader from "components/Loader";
import useAuth from "./useAuth";

const ProtectedRoute = () => {
  const { isLoading, authenticated } = useAuth();
  if (isLoading) {
    return <Loader />;
  }

  if (authenticated) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
