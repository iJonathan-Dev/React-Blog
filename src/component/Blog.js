import React from "react";
import "./Blog.scss";

const Blog = ({ blogData, handleDelete }) => {
  return (
    <div class="blog-list">
      {blogData.map((data) => (
        <div class="blog-body" key={data.id}>
          <p class="blog-title">{data.title}</p>
          <p class="blog-author">Author: {data.author}</p>
          <p class="blog-content">{data.content}</p>
          <button class="delete" onClick={() => handleDelete(data.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
