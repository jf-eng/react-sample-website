import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Magic Istanbul</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
};
