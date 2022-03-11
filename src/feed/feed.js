import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import apiUrl from "../apiUrl";
const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch(apiUrl + "posts")
      .then((response) => response.json())
      .then((data) => setFeed(data))
      .catch(() => console.log("whoopsie daisy you did something wrong"));
  }, []);

  const displayFeed = feed.map((post) => (
    // <div key={post._id}>
    //   <Link to={`/postPage/${post._id}`}>{post.Title}</Link>
    //   <h3>{post.Date}</h3>
    //   <h5>{post.Price}</h5>
    //   <h5>{post.Location}</h5>
    //   <h6>{post.Description}</h6>
    // </div>
    <Link to={`/postPage/${post._id}`} className="feed-post-cards">
      <Card style={{ width: "18rem" }} key={post._id}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>
            {post.Title}
            {post.Date}
          </Card.Title>
          <Card.Subtitle>{post.Location}</Card.Subtitle>

          <Card.Text>
            <br />
            <p>{post.Description}</p>
            <br />${post.Price}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Link>
  ));
  return <div className="feed">{displayFeed}</div>;
};
export default Feed;
