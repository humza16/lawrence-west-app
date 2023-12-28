import "styles/global.scss";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import theme from "theme";
import { ThemeProvider } from "@emotion/react";
const ProtectedRoute = lazy(() => import("shared/Auth/ProtectedRoute"));
const Home = lazy(() => import("containers/Home"));
const About = lazy(() => import("containers/About"));
const Contact = lazy(() => import("containers/Contact"));
const Login = lazy(() => import("containers/Auth/Login"));
const Signup = lazy(() => import("containers/Auth/Signup"));
const ForgetPassword=lazy(()=>import("components/ForgetPassword/ForgetPassword"))
const ResetPassword=lazy(()=>import("components/ForgetPassword/ResetPassword"))

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<ProtectedRoute {...props} />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <Home {...props} />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <About {...props} />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <Contact {...props} />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Login {...props} />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Signup {...props} />
            </Suspense>
          }
        />
        <Route
          path="/forget-password"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <ForgetPassword {...props} />
            </Suspense>
          }
        />
             <Route
          path="/reset-password"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <ResetPassword {...props} />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
