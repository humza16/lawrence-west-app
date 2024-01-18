import "styles/global.scss";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import theme from "theme";
import { ThemeProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";
import Loader from "components/Loader";
import { Lazy } from "yup";
const ProtectedRoute = lazy(() => import("shared/Auth/ProtectedRoute"));
const Home = lazy(() => import("containers/Home"));
const About = lazy(() => import("containers/About"));
const Contact = lazy(() => import("containers/Contact"));
const Login = lazy(() => import("containers/Auth/Login"));
const Signup = lazy(() => import("containers/Auth/Signup"));
const ForgetPassword = lazy(() => import("components/ForgetPassword/ForgetPassword"))
const ResetPassword = lazy(() => import("components/ForgetPassword/ResetPassword"))
const Onboarding = lazy(() => import("containers/Onboarding"));
const LegalAgreement = lazy(() => import("containers/LegalAgreement"));
const AuthLayout = lazy(() => import("components/Layout/AuthLayout"));
const Profile = lazy(() => import("components/ProfileSetting/Profile"))
const SetPassword = lazy(() => import("components/ProfileSetting/Password"))
const LandingPage = lazy(() => import("components/LandingPage"))
function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<ProtectedRoute {...props} />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home {...props} />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About {...props} />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact {...props} />
              </Suspense>
            }
          />
          <Route
            path="/onboarding"
            element={
              <Suspense fallback={<Loader />}>
                <Onboarding {...props} />
              </Suspense>
            }
          />
          <Route
            path="/legal-agreement"
            element={
              <Suspense fallback={<Loader />}>
                <LegalAgreement {...props} />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile {...props} />
              </Suspense>
            }
          />
          <Route
            path="/change-password"
            element={
              <Suspense fallback={<Loader />}>
                <SetPassword {...props} />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AuthLayout {...props} />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login {...props} />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <Signup {...props} />
              </Suspense>
            }
          />
          <Route
            path="/forget-password"
            element={
              <Suspense fallback={<Loader />}>
                <ForgetPassword {...props} />
              </Suspense>
            }
          />
          <Route
            path="/reset-password"
            element={
              <Suspense fallback={<Loader />}>
                <ResetPassword {...props} />
              </Suspense>
            }
          />
          <Route
            path="/landing-page"
            element={
              <Suspense fallback={Loader}>
                <LandingPage {...props} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          // className: '',
          duration: 3000,
          // style: {
          //   background: '#363636',
          //   color: '#fff',
          // },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              // primary: 'green',
              // secondary: 'black',
            },
          },
          error: {

          }
        }}
      />
    </ThemeProvider>
  );
}

export default App;
