import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((data) => data.id !== id);

  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error("Failed to Fetch Data!");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setBlogs(data);
          setisLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(true);
          setisLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      <h1>Welcome to My Blog!</h1>
      {error && <p>Failed to Fetch Data!</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <Blog blogData={blogs} />}
    </div>
  );
};

export default Home;
