import React, { useState, useEffect } from 'react';
import AllPosts from '../allPosts/AllPosts';


const PostView = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        // posts
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
          
        })
               
    }, [])

    return (
        <div>
            {
                posts.map(post => <AllPosts id={post.id} key={post.id} title={post.title} body={post.body}></AllPosts>)
            }
           
        </div>
    );
};

export default PostView;