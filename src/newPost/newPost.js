import { Button } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
// import { Button, Modal } from "react-bootstrap";
import { render } from "react-dom";
import {Route, Link, Routes, } from 'react-router-dom'
import apiUrl from './../apiUrl'

const NewPost = () => {
  const [confirmation, setConfirmation] = useState(" ")

    const [posts, setPosts] = useState({
    Title: "",
    Price: "",
    Location: "",
    Description: "",
    Images: []
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
    fetch(apiUrl + `posts/post`, {
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

        <Link to='/'>Go back</Link>

        </div>
    )
    })


    //   .then(() => fetch(apiUrl + `posts/post`))
    //   .then((response) => response.json())
    //   .then((data) => setAuthors(data))
    //   .then(() => setPosts({  Title: "",
    //   Price: "",
    //   Location: "",
    //   Description: "",}));
  };

  return (
    <section className="new-post-page">
      {/* <form onSubmit={handleSubmitPosts} className="new-author-form">
        
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
      </form> */}
      <Form 
        style={{ width: "18rem" }}
        onSubmit={handleSubmitPosts}
        className="new-comment-form"
      >
      <Form.Label><h1>New Post</h1></Form.Label>
        <Form.Control
          onChange={handleChangePosts}
          value={posts.Title}
          name="Title"
          placeholder="Title"
        />
        <Form.Control
          onChange={handleChangePosts}
          value={posts.Location}
          name="Location"
          placeholder="Location"
        />
        
        <Form.Control
          onChange={handleChangePosts}
          value={posts.Price}
          name="Price"
          type="number"
          placeholder="Price"
        />

        <Form.Control
          as="textarea"
          rows={3}
          onChange={handleChangePosts}
          value={posts.Description}
          name="Description"
          placeholder="Description"
          type="text"
        />

        <Button type="submit" className="new-post-button">Add Comment</Button>
      </Form>
    
     {confirmation}
    
    </section>
  );
};

export default NewPost;