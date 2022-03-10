import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setFeed(data))
      .catch(() => console.log("whoopsie daisy you did something wrong"));
  
 }, [])

  const displayFeed = feed.map((post) => (
    // <div key={post._id}>
    //   <Link to={`/postPage/${post._id}`}>{post.Title}</Link>
    //   <h3>{post.Date}</h3>
    //   <h5>{post.Price}</h5>
    //   <h5>{post.Location}</h5>
    //   <h6>{post.Description}</h6>
    // </div>

<Card style={{ width: '18rem' }} key={post._id}>
{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
<Card.Body>
  <Card.Title><Link to={`/postPage/${post._id}`}>{post.Title}</Link>{post.Date}</Card.Title>
  <Card.Text>
  {post.Location}
  <br/>
  {post.Description}
  <br/>
    Price: ${post.Price}
    
  </Card.Text>
  {/* <Button variant="primary">Go somewhere</Button> */}
</Card.Body>
</Card>
  ));
  return (
    <div className="feed">
      {displayFeed}
   
    </div>
  );
};
export default Feed