import React, { useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog", author: "Jonathan", content: "Lorem Ipsum..", id: 1 },
    { title: "Second Blog", author: "Jonathan", content: "Lorem Ipsum..", id: 2 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((data) => data.id !== id);

    setBlogs(newBlogs);
  };

  return (
    <div class="home">
      <h1>Welcome to My Blog!</h1>
      <Blog blogData={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
