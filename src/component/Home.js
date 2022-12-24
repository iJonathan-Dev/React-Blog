import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Home = () => {
  //set JSON server url
  const url = "http://localhost:3001/blogs/";

  //controlling blogs render state
  const [blogs, setBlogs] = useState(null);

  //controlling error message render state
  const [error, setError] = useState(null);

  //controlling loading message render state
  const [isLoading, setisLoading] = useState(true);

  //Delete blog function based on ID
  const handleDelete = (id) => {
    fetch(url + id, {
      method: "DELETE",
    }).then(() => fetchData());
  };

  //fetching all blog function
  const fetchData = () => {
    fetch(url)
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
        setError(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setisLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="home">
      <h2>Welcome to My Blog!</h2>
      {error && <p>Failed to Fetch Data!</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogCard blogData={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
