import { Navigate, Outlet } from "react-router-dom";
import Layout from "components/Layout/Layout";
import { localstorageService } from "utils/localStorageService";

const ProtectedRoute = (props) => {
  if (localstorageService.getToken()) {
    localstorageService.logout();
    return <Navigate to="/login" />;
  }
  return (
    <Layout>
      <Outlet {...props} />
    </Layout>
  );
};

export default ProtectedRoute;
