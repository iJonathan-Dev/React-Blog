import React from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";

const Blog = ({ blogData, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogData.map((data) => (
        <div className="blog-body" key={data.id}>
          <p className="blog-title">{data.title}</p>
          <p className="blog-author">Author: {data.author}</p>
          <p className="blog-content">{data.content}</p>
          <button className="delete" onClick={() => handleDelete(data.id)}>
            Delete
          </button>

          <Link to={`/blogs/${data.id}`}>
            <button className="view-blog">View Blog</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
