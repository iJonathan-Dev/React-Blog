import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  //set JSON server url
  const url = "http://localhost:3001/blogs/";

  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const handleDelete = (id) => {
    fetch(url + id, {
      method: "DELETE",
    }).then(() => fetchData());
  };

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
      <h1>Welcome to My Blog!</h1>
      {error && <p>Failed to Fetch Data!</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <Blog blogData={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
