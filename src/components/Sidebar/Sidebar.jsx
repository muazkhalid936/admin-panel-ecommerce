import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} className="addproduct">
        <FaCartPlus className="icon"/>
        <p>Add Product</p>
      </Link>
      <Link to={"/listallproduct"} className="addproduct">
        <RiFileListLine className="icon"/>
        <p>List All Product</p>
      </Link>
    </div>
  );
};

export default Sidebar;
