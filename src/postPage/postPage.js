import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
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
    fetch(`http://localhost:4000/posts/post/` + params.id, {
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
    fetch(`http://localhost:4000/posts/post/` + params.id)
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
      `http://localhost:4000/comments/post/` + params.id + "/comment/" + id,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      //   .then((res) => console.log(res))
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
    fetch(`http://localhost:4000/comments/post/` + params.id + `/comment/`, {
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

  return (
    <Card className="App">
      <Card.Body>
        <Card.Text><h1>{post.Title}</h1></Card.Text>
		<Card.Text><h1>{post.Date}</h1></Card.Text>
		<Card.Text><h1>${post.Price}</h1></Card.Text>
		<Card.Text><h1>Location: {post.Location}</h1></Card.Text>
		<Card.Text><h1>{post.Description}</h1></Card.Text>
		<Card.Text> <h1>{post.Images}</h1></Card.Text>
        
        
        
        
       
      </Card.Body>
      <Form style={{ width: "18rem" }} onSubmit={handleSubmitComment} className="new-author-form">
        {/* <Form.Label>Name</Form.Label> */}
		<Form.Control onChange={handleChangeComment} value={comment.Name} name="Name" placeholder="Name"/>
		{/* <input
          onChange={handleChangeComment}
          value={comment.Name}
          name="Name"
          placeholder="Name"
        /> */}
		<Form.Control as="textarea" rows={3} onChange={handleChangeComment} value={comment.Comment} name="Comment" placeholder="Comment" type="text"/>

        {/* <textarea
          onChange={handleChangeComment}
          value={comment.Comment}
          name="Comment"
          placeholder="Comment"
        /> */}
	<Button type="submit">Add Comment</Button>
        {/* <button type="Submit">Add Comment</button> */}
      </Form>

      {/* <Card style={{ width: "18rem" }}> */}
        
        {post.Comments.map((comments) => {
        //   console.log(comments);
          return (
            <Card key={comments._id} style={{ width: "18rem" }}>
              <Card.Title>{comments.Name}</Card.Title>
              <Card.Body>
                <Card.Text>{comments.Vote}</Card.Text>
                <Card.Text>{comments.Comment}</Card.Text>
                <Button onClick={() => handleDelete(comments._id)}>
                  DELETE ME PLEASE
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      {/* </Card> */}
      {/* <h1>Tags: {post.Tags}</h1> */}
    </Card>
  );
}
export default PostPage;
