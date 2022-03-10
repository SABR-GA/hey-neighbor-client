import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { render } from "react-dom";
import {Route, Link, Routes, } from 'react-router-dom'


const NewPost = () => {
  const [confirmation, setConfirmation] = useState(" ")

    const [posts, setPosts] = useState({
    Title: "",
    Price: "",
    Location: "",
    Description: "",
  });



  const handleChangePosts = (event) => {
    event.persist();
    setPosts((prevPosts) => {
      const editedPosts = {
        ...prevPosts,
        [event.target.name]: event.target.value,
      };
      return editedPosts;
    });
  };

  const handleSubmitPosts = (event) => {
    event.preventDefault();
    console.log(posts);
    fetch(`http://localhost:4000/posts/post`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(posts),
    })
    .then(() => {
       setPosts({
        Title: "",
        Price: "",
        Location: "",
        Description: "",
      })
          })
.then(() => {
    setConfirmation(
        <div>
        <h1>Post Created</h1>
        <a href="http://localhost:3000/#/posts" >Go back</a>
        </div>
    )
    })


    //   .then(() => fetch(`http://localhost:3000/posts/post`))
    //   .then((response) => response.json())
    //   .then((data) => setAuthors(data))
    //   .then(() => setPosts({  Title: "",
    //   Price: "",
    //   Location: "",
    //   Description: "",}));
  };

  return (
    <>
      <form onSubmit={handleSubmitPosts} className="new-author-form">
        <input
          onChange={handleChangePosts}
          value={posts.Title}
          name="Title"
          placeholder="Title"
        />
        <input
          onChange={handleChangePosts}
          value={posts.Price}
          name="Price"
          placeholder="Price"
        />
        <input
          onChange={handleChangePosts}
          value={posts.Location}
          name="Location"
          placeholder="Location"
        />
        <input
          onChange={handleChangePosts}
          value={posts.Description}
          name="Description"
          placeholder="Description"
        />
       
    <button type="Submit">Add Post</button>
      </form>
     {confirmation}
    
    </>
  );
};

export default NewPost;