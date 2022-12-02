import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";

const BlogApp = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </>
  );
};

export default BlogApp;
