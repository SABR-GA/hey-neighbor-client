import { useState } from "react";
import { Form } from "react-bootstrap";
// import { Button, Modal } from "react-bootstrap";
import { render } from "react-dom";
import {Route, Link, Routes, } from 'react-router-dom'


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
    fetch(`http://localhost:3000/posts/post`, {
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


    //   .then(() => fetch(`http://localhost:3000/posts/post`))
    //   .then((response) => response.json())
    //   .then((data) => setAuthors(data))
    //   .then(() => setPosts({  Title: "",
    //   Price: "",
    //   Location: "",
    //   Description: "",}));
  };

  return (
    <section className="new-post-page">
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
      {/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
     {confirmation}
    
    </section>
  );
};

export default NewPost;