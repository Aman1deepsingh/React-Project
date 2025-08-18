import React from 'react'
import { useState } from 'react';

function Welcome() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState({});
    function getPosts() {
        
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error));
    }
    function getPost() {
        const id = postId;
        
        fetch(`http://localhost:5000/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(error => console.log(error));
    }
    
    return (
        <>
            <h1>Welcome Page</h1>
            <button onClick={getPosts}>Get Posts</button>
            <input type="number" onChange={(e) => setPostId(e.target.value)}/>
            <button onClick={getPost}>Get Post</button>
            {posts.map((post) => <div key={post.id}><h2>{post.title}</h2><p>{post.description}</p></div>)}

            <div><h2>{post.title}</h2><p>{ post.description }</p></div>
        </>
    )
}

export default Welcome