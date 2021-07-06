import React from 'react';
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';

export default function MainPosts() {
    return (
        <div className="main-page-posts">
            <PostSubmit />
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