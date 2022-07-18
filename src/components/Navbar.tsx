import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  React.useEffect(() => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    const clicked = () => {
      nav?.classList.toggle("nav-active");
      console.log("burger clicked");

      // Animation for each link to fade in - index is used to calculate time delay
      navLinks.forEach((value, index) => {
        let valueHTML = value as HTMLElement;
        if (valueHTML.style.animation) {
          // Needed to reset the animation state- for when clicking burger again to close the sidebar
          valueHTML.style.animation = "";
        } else {
          valueHTML.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 2 + 0.4
          }s`;
        }
      });

      // Toggle burger-clicked state
      burger?.classList.toggle("burger-clicked");
    };

    burger?.addEventListener("click", clicked);

    return () => {
      burger?.removeEventListener("click", clicked);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">My Logo</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <div className="burger">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};
