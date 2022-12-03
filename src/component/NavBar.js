import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <h1>MY BLOG</h1>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/new-blog">
            New Blog
          </Link>
          <Link className="menu-item" to="/about">
            About
          </Link>
          <Link className="menu-item" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
