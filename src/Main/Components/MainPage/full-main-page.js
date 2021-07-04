import React from 'react'
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';

export default function FullMain({loggedIn, moviesLink, castingLink, postLink, newsLink, followingLink}) {
    if(!loggedIn && moviesLink){
        return (
            <div>Movies</div>
        )
    }
    if(!loggedIn && castingLink){
        return (
            <div>Casting</div>
        )
    }
    if(!loggedIn && postLink){
        return (
            <div>
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
    if(!loggedIn && newsLink){
        return (
            <div>News</div>
        )
    }
    if(!loggedIn && followingLink){
        return (
            <div>Following</div>
        )
    }
    else {
        return null
    }
}