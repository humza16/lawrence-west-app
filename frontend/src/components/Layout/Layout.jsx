import React from "react";
import "./layout.scss";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact</Link>
    </div>
  );
};

export default Layout;
