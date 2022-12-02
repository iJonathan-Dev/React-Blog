import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <h1>MY BLOG</h1>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">New Blog</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
