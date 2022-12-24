import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import NewBlog from "./NewBlog";
import About from "./About";
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./BlogApp.scss";
import Footer from "./Footer";

const BlogApp = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/new-blog">
              <NewBlog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default BlogApp;
