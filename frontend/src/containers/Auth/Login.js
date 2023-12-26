import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "12px",
          //   maxWidth: 300,
        }}
      >
        <h2>login</h2>
        <input placeholder="email" type="text" />
        <input placeholder="password" type="password" />
      </div>
    </div>
  );
};

export default Login;
