import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, NavLink, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <NavLink to="/">Homepage</NavLink>
    </div>
  );
}

export const History = {
  navigate: null,
  push: (page, ...rest) => History.navigate(page, ...rest),
};

const NavigateSetter = () => {
  History.navigate = useNavigate();

  return null;
};

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <ErrorBoundary fallbackRender={fallbackRender}>
        <GoogleOAuthProvider clientId="210605343891-1krcn2138uumh8cogr6fl52cttafavlu.apps.googleusercontent.com">
          <React.StrictMode>
            <NavigateSetter />
            <App />
          </React.StrictMode>
        </GoogleOAuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
