import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar fixed">
      <div className="logo">
        <img src={logo} alt="Rehaan Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Clients">Client</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
