import {useState} from 'react';
import {render} from 'react-dom';
//import apiUrl from './../apiUrl'
// import postId from './../feed'
import {useParams} from 'react-router'
function PostPage() {
    let params = useParams()
    const [post, setNewPost] = useState({
        Title: '',
        Date: '',
        Price: '',
        Location: '',
        Description: '',
        Images: [],
        Likes: '',
       
        Tags: []
})
    const populatePostPage = (props) => {
        fetch(`localhost:4000/posts/post/` + params.id , {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          body: JSON.stringify(post)
      }).then((res)=>res.json())
      .then((data)=>setNewPost(data))
      .catch(err => console.log(err))
    
    
    //   const handleClick = () => {
    //   fetch(apiUrl + '/vinyls')
    //     .then(response => response.json())
    //     .then(data => setVinyls(data.vinyls))
    // }
  
    // const commentList = comments.map(comments => <li key={comments._id}>{comments.name}: {comments.date}: {comments.vote}: </li>)
  
    return (
      <div className="App">
       <h1>{post.Title}</h1>
       <h1>{post.Date}</h1>
       <h1>{post.Price}</h1>
       <h1>{post.Location}</h1>
       <h1>{post.Description}</h1>
       <h1>{post.Images}</h1>
       <h1>{post.Likes}</h1>
       <h1>{post.Comments.map(comments => <li key={comments._id}>{comments.name}: {comments.date}: {comments.vote}: </li>)}</h1>
       <h1>{post.Tags}</h1>
      
      </div>
    );
  }}
    export default PostPage