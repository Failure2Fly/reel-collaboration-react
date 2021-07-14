import React from 'react';
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';

export default function MainPosts({loggedIn, name, userUID, setPosts, posts}) {
    return (
        <div className="main-page-posts">
            <PostSubmit loggedIn={loggedIn} name={name} userUID={userUID}/>
            <Post setPosts={setPosts} posts={posts} userUID={userUID}/>
        </div>
    )
}