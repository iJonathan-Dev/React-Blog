import React from "react";
import "./Blog.scss";

const Blog = ({ blogData }) => {
  return (
    <div className="blog-list">
      {blogData.map((data) => (
        <div className="blog-body" key={data.id}>
          <p className="blog-title">{data.title}</p>
          <p className="blog-author">Author: {data.author}</p>
          <p className="blog-content">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
