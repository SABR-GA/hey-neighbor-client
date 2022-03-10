import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { render } from "react-dom";
//import apiUrl from './../apiUrl'
// import postId from './../feed'
import { useParams } from "react-router";

function PostPage() {
  //const [confirmation, setConfirmation] = useState(" ")

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
    fetch(`http://localhost:3000/posts/post/` + params.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      //   body: JSON.stringify(post)
    })
      .then((res) => res.json())
      //   .then((res)=>console.log(res))
      .then((res) => setNewPost(res))
      .catch((err) => console.log(err));
  }, []);

  const refreshOnDelete = () => {
    fetch(`http://localhost:3000/posts/post/` + params.id)
      .then((res) => res.json())
      .then((res) => setNewPost(res))
      .catch(() => console.log("COULDNT REFRESH"));
  };
  //   const handleClick = () => {
  //   fetch(apiUrl + '/vinyls')
  //     .then(response => response.json())
  //     .then(data => setVinyls(data.vinyls))
  // }

  // const commentList = comments.map(comments => <li key={comments._id}>{comments.name}: {comments.date}: {comments.vote}: </li>)

  const handleDelete = (id) => {
    fetch(
      `http://localhost:3000/comments/post/` + params.id + "/comment/" + id,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
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
    fetch(`http://localhost:3000/comments/post/` + params.id + `/comment/`, {
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
    //   fetch(`http://localhost:4000/posts/post/` + params.id)
    //   .then((res) => res.json())
    //   .then((res) => setNewPost(res))
    //    .catch(() => console.log('COULDNT REFRESH'));
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
    //   fetch(`http://localhost:3000/posts/post`, {
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
    fetch( `http://localhost:3000/posts/post/` + params.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(update),
    })
      .then(() => fetch(`http://localhost:3000/posts/post/` + params.id))
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
    <div className="App">
      
      <h3>Title: {post.Title}</h3>
      <h3>Date: {post.Date}</h3>
      <h3>Price: {post.Price}</h3>
      <h3>Location: {post.Location}</h3>
      <h3>Description: {post.Description}</h3>
      <h3>Pictures: {post.Images}</h3>

      <form onSubmit={handleSubmitComment} className="new-author-form">
        <input
          onChange={handleChangeComment}
          value={comment.Name}
          name="Name"
          placeholder="Name"
        />
        <textarea
          onChange={handleChangeComment}
          value={comment.Comment}
          name="Comment"
          placeholder="Comment"
        />

        <button type="Submit">Add Comment</button>
        
      </form>
<Example post={post}/>
      <h3>
        Comments:
        {post.Comments.map((comments) => {
          console.log(comments);
          return (
            <ul key={comments._id}>
              <li>{comments.Name}</li>
              <li>{comments.Vote}</li>
              <li>{comments.Comment}</li>
              <button onClick={() => handleDelete(comments._id)}>
                DELETE ME PLEASE
              </button>
            </ul>
          );
        })}
      </h3>
      <h3>Tags: {post.Tags}</h3>
    </div>
  );
}
export default PostPage;
