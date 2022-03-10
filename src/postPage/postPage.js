import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { render } from "react-dom";

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
    fetch(`http://localhost:4000/posts/post/` + params.id, {
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
    fetch(`http://localhost:4000/posts/post/` + params.id)
      .then((res) => res.json())
      .then((res) => setNewPost(res))
      .catch(() => console.log("COULDNT REFRESH"));
  };

  const handleDelete = (id) => {
    fetch(
      `http://localhost:4000/comments/post/` + params.id + "/comment/" + id,
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
  };

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
