import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "components/Layout/Layout";
import { localstorageService } from "utils/localStorageService";

const ProtectedRoute = (props) => {
  const {pathname} = useLocation();
  if (localstorageService.getToken()) {
    localstorageService.logout();
    return <Navigate to="/login" />;
  }
  return (
    <>
      {pathname !== '/onboarding' ?  <Layout /> : null}
      <Outlet {...props} />
    </>
  );
};

export default ProtectedRoute;
