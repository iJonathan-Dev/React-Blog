import React from "react";
import "./BlogCard.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogData.map((data) => (
        <div className="blog-body" key={data.id}>
          <p className="blog-title">
            <Link to={`/blogs/${data.id}`}>{data.title}</Link>
          </p>
          <p className="blog-author">Author: {data.author}</p>
          <p className="blog-content">{data.content}</p>
          <Link to={`/blogs/${data.id}`}>
            <button className="view-blog">View Blog</button>
          </Link>
          <button className="delete" onClick={() => handleDelete(data.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
