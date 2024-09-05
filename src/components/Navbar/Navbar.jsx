import React from "react";
import "./Navbar.css";
import nav_logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={nav_logo} alt="" className="logo" />

        <div>
          <p className="shopper">Shopper</p>
          <p className="admin">Admin Panel</p>
        </div>
      </div>

      <div className="nav-user">
        <FaUser className="user-img" />
        <IoMenuSharp  className="menu"/>
      </div>
    </div>
  );
};

export default Navbar;
