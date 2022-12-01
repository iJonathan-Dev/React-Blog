import React from "react";
import "./BlogApp.scss";

const NavBar = () => {
  return (
    <div class="navigation-bar">
      <div class="logo">
        <h1>MY BLOG</h1>
      </div>
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-item">Home</li>
          <li class="menu-item">New Blog</li>
          <li class="menu-item">About</li>
          <li class="menu-item">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
