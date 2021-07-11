import React from 'react';
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';

export default function MainPosts({loggedIn, name}) {
    return (
        <div className="main-page-posts">
            <PostSubmit loggedIn={loggedIn} name={name}/>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}