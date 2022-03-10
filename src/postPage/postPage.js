import { useEffect, useState } from 'react';
import { render } from 'react-dom';
//import apiUrl from './../apiUrl'
// import postId from './../feed'
import { useParams } from 'react-router';

function PostPage() {
	let params = useParams();
	const [ post, setNewPost ] = useState({
		Title: '',
		Date: '',
		Price: '',
		Location: '',
		Description: '',
		Images: [],
		Likes: '',
		Comments: [],
		Tags: []
	});

	useEffect(() => {
		fetch(`http://localhost:4000/posts/post/` + params.id, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'GET'
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
			.catch(() => console.log('COULDNT REFRESH'));
    }
	//   const handleClick = () => {
	//   fetch(apiUrl + '/vinyls')
	//     .then(response => response.json())
	//     .then(data => setVinyls(data.vinyls))
	// }

	// const commentList = comments.map(comments => <li key={comments._id}>{comments.name}: {comments.date}: {comments.vote}: </li>)

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/comments/post/` + params.id + '/comment/' + id, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then(() => refreshOnDelete())
        .catch(() => console.log('UNABLE TO DESTROY'));
    }

	return (
		<div className="App">
			<h1>Title: {post.Title}</h1>
			<h1>Date: {post.Date}</h1>
			<h1>Price: {post.Price}</h1>
			<h1>Location: {post.Location}</h1>
			<h1>Description: {post.Description}</h1>
			<h1>Pictures: {post.Images}</h1>
			<h1>
				Comments:
				{post.Comments.map((comments) => {
					console.log(comments.Vote)
                    return (
						<ul key={comments._id}>
							<li>{comments.Name}</li> 
                            <li>{comments.Vote}</li>
                            <li>{comments.Comment}</li>
                            <button onClick={() => handleDelete(comments._id)}>DELETE ME PLEASE</button>
						</ul>
					);
				})}
			</h1>
			<h1>Tags: {post.Tags}</h1>
		</div>
	);
}
export default PostPage;
