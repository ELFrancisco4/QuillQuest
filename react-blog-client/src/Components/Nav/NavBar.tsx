import "./Navbar.scss";
import { LiaEdit } from "react-icons/lia";
import { GrNotification } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/images/QuillQuest.jpeg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          {" "}
          <img src={logo} alt={logo} /> QuillQuest
        </Link>
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-menu">
        {" "}
        <div>
          <Link to="/home/write">Write</Link>
          <LiaEdit />
        </div>
        <GrNotification />
        <Link to="/home/profile">
          <CgProfile /> {/* Change to user uploaded image */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
