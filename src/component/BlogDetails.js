import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  //getting blog ID using useParams from previously selected blog item.
  const { id } = useParams();

  //controlling component render state
  const [blogs, setBlogs] = useState(null);

  //fetch blog based on ID
  useEffect(() => {
    fetch("http://localhost:3001/blogs/" + id)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        //console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="blog-details">
      {blogs && (
        <div key={blogs.id}>
          <h2 className="blog-title ">{blogs.title}</h2>
          <p className="blog-author">Author: {blogs.author}</p>
          <p className="blog-content">{blogs.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
