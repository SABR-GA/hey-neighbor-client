import { useEffect, useState } from "react";

import { Button, Card, Form } from "react-bootstrap";
import { render } from "react-dom";
import apiUrl from './../apiUrl'

import { useParams } from "react-router";

function PostPage() {
  const [comment, setComment] = useState({
    Name: "",
    Date: "",
    Comment: "",
    Vote: "",
  });

  let params = useParams();
  const [post, setNewPost] = useState({
    Title: "",
    Date: "",
    Price: "",
    Location: "",
    Description: "",
    Images: [],
    Likes: "",
    Comments: [],
    Tags: [],
  });

  useEffect(() => {
    fetch(apiUrl + `posts/post/` + params.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setNewPost(res))
      .catch((err) => console.log(err));
  }, []);

  const refreshOnDelete = () => {
    fetch(apiUrl + `posts/post/` + params.id)
      .then((res) => res.json())
      .then((res) => setNewPost(res))
      .catch(() => console.log("COULDNT REFRESH"));
  };

  const handleDelete = (id) => {
    fetch(
      apiUrl + `comments/post/` + params.id + "/comment/" + id,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())

      .then(() => refreshOnDelete())
      .catch(() => console.log("UNABLE TO DESTROY"));
  };
  const handleChangeComment = (event) => {
    event.persist();
    setComment((prevComment) => {
      const editedComment = {
        ...prevComment,
        [event.target.name]: event.target.value,
      };
      return editedComment;
    });
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    //console.log(comment);
    fetch(apiUrl + `comments/post/` + params.id + `/comment/`, {

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(comment),
    })
      .then(() => {
        setComment({
          Name: "",
          Date: "",
          Comment: "",
          Vote: "",
        });
      })
      .then(() => refreshOnDelete());
  };
  function Example(props) {
  //   const [show, setShow] = useState(false);
  
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  

    // const [posts, setPosts] = useState({
    //   Title: "",
    //   Price: "",
    //   Location: "",
    //   Description: "",
    //   Images: []
    // });
  
    // const handleChangeComment = (event) => {
    //   event.persist();
    //   setComment((prevComment) => {
    //     const editedComment = {
    //       ...prevComment,
    //       [event.target.name]: event.target.value,
    //     };
    //     return editedComment;
    //   });
    // };
  
    // const handleChangePosts = (event) => {
    //   event.persist();
    //   setNewPost((prevPosts) => {
    //     const editedPosts = {
    //       ...prevPosts,
    //       [event.target.name]: event.target.value,
    //     };
    //     return editedPosts;
    //   });
    // };
  
    // const handleSubmitPosts = (event) => {
    //   event.preventDefault();
    //   console.log(post);
    //   fetch(apiUrl + `posts/post`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "PATCH",
    //     body: JSON.stringify(post),
    //   })
    //   .then(() => {
    //      setNewPost({
          // Title: "",
          // Price: "",
          // Location: "",
          // Description: "",
    //     })
    //         })
    //       }
  // .then(() => {
  //     setConfirmation(
  //         <div>
  //         <h1>Post Created</h1>
  //         <a href="http://localhost:3000/#/posts" >Go back</a>
  //         </div>
  //     )
  //     })
    

  const [update, setUpdate] = useState({
    Title: props.Title,
    Price: props.Price,
    Location: props.Location,
    Description: props.Description,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeUpdate = (event) => {
    event.persist();
    setUpdate((post) => {
      const editedPost = {
        ...post,
        [event.target.name]: event.target.value,
      };
      return editedPost;
    });
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    fetch( apiUrl + `posts/post/` + params.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(update),
    })
      .then(() => fetch(apiUrl + `posts/post/` + params.id))
      .then((response) => response.json())
      .then((data) => setNewPost(data))
      .then(() => setUpdate({  Title: "",
      Price: "",
      Location: "",
      Description: "", }));
  };


    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Update Post
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><form onSubmit={handleSubmitUpdate} className="new-author-form">
        
        <input
          onChange={handleChangeUpdate}
          value={update.Title}
          name="Title"
          defaultValue={post.Title}
                  />
        <input
          onChange={handleChangeUpdate}
          value={update.Price}
          name="Price"
          defaultValue={post.Price}
        />
        <input
          onChange={handleChangeUpdate}
          value={update.Location}
          name="Location"
          defaultValue={post.Location}
        />
        <input
          onChange={handleChangeUpdate}
          value={update.Description}
          name="Description"
          defaultValue={post.Description}
        />

    <button type="Submit">Add Post</button>
      </form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={handleClose} >
              {/* <button> Save Changes </button> */}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 
  return (

    <section className="post-page">
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>{post.Title}</h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h4>{post.Location}</h4>
          </Card.Subtitle>
          <Card.Subtitle>
            <h2>{post.Date}</h2>
          </Card.Subtitle>
          <Card.Text>
            <h3>${post.Price}</h3>
          </Card.Text>
          <Card.Text>
            <p>{post.Description}</p>
          </Card.Text>
          <Card.Text>
            {" "}
            <h1>{post.Images}</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      <Form
        style={{ width: "18rem" }}
        onSubmit={handleSubmitComment}
        className="new-comment-form"
      >
        <Form.Control

          onChange={handleChangeComment}
          value={comment.Name}
          name="Name"
          placeholder="Name"
        />

        <Form.Control
          as="textarea"
          rows={3}
          onChange={handleChangeComment}
          value={comment.Comment}
          name="Comment"
          placeholder="Comment"
          type="text"
        />


        <Button type="submit">Add Comment</Button>
      </Form>
	<section className="comment-list">
      {post.Comments.map((comments) => {
        return (
          <Card key={comments._id} style={{ width: "32rem" }}>
            <Card.Body>
              <Card.Title>{comments.Name}</Card.Title>
              {/* <Card.Text>{comments.Vote}</Card.Text> */}
              <Card.Text>{comments.Comment}</Card.Text>
              <Button onClick={() => handleDelete(comments._id)}>
                Remove Comment
              </Button>
            </Card.Body>
          </Card>
        );
	})}
	</section>
    </section>

  );
}
export default PostPage;
