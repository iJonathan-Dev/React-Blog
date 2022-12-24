import React, { useState } from "react";
import "./NewBlog.scss";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  //POST new blog data
  const handleSubmit = (event) => {
    event.preventDefault();

    //create blog object based on form data
    const blog = { title, author, content };

    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Blog has been added!");
      setTitle("");
      setAuthor("");
      setContent("");
    });
  };

  return (
    <div className="new-blog">
      <h2>Create a New Blog</h2>
      <form>
        <label for="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} required></input>
        <br />
        <label for="author">Author:</label>
        <input type="text" id="Authoer" value={author} onChange={(event) => setAuthor(event.target.value)} required></input>
        <br />
        <label for="content">Content:</label>
        <textarea id="content" cols="30" rows="10" value={content} onChange={(event) => setContent(event.target.value)} required></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
