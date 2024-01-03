import { Outlet, Navigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Loader from "components/Loader";
import useAuth from "./useAuth";

const ProtectedRoute = () => {
  const { isLoading, authenticated } = useAuth();

  return isLoading ? (
    <Loader />
  ) : authenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
