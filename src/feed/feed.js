import { useState } from "react"
import { Link } from "react-router-dom";

const Feed = () => {

    const [feed, setFeed] = useState([]);

    const pageLoad = () => {
        fetch('http://localhost:4000/posts')
        .then((response) => response.json())
        .then((data) => setFeed(data))
        .catch(() => console.log('whoopsie daisy you did something wrong'));
    };

    const getId =(props)=>{
        console.log(props)
    }


    const displayFeed = feed.map((post) => (
        <div key={post._id}>
            <Link to={`/postPage/${post._id}`}>{post.Title}</Link>
            {/* <h2 onClick={()=>setPostId(post._id)}>{post.Title}</h2> */}
            {/* <h2 onClick={()=>setPostId(post._id)}>{post.Title}</h2> */}
            <h3>{post.Date}</h3>
            <h5>{post.Price}</h5>
            <h5>{post.Location}</h5>
            <h6>{post.Description}</h6>
        </div>
    ));
//make fetch request, navigate to page, populate page with post data + comments

return(
    <div>
        {/* <button onClick={handleClick}>SEE FEED</button> */}
        <ul onLoad={pageLoad()}>{displayFeed}</ul>
    </div>
)
}

export default Feed