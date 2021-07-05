import React from 'react'
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';
import Movies from '../Movies/movies'
import NewsArticle from '../News/news-page';

export default function FullMain({loggedIn, moviesLink, castingLink, postLink, newsLink, followingLink}) {
    if(!loggedIn && moviesLink){
        return (
        <div className="videos">
            <Movies />
            <Movies /> 
            <Movies /> 
            <Movies /> 
            <Movies /> 
            <Movies />
            <Movies />
            <Movies /> 
            <Movies /> 
            <Movies /> 
            <Movies /> 
            <Movies />
            <Movies /> 
            <Movies /> 
            <Movies /> 
            <Movies />     
            <Movies /> 
            <Movies /> 
            <Movies /> 
            <Movies />          
        </div>
        )
    }
    else if(!loggedIn && castingLink){
        return (
            <div>Casting</div>
        )
    }
    else if(!loggedIn && postLink){
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
    else if(!loggedIn && newsLink){
        return (
            <div>
                <NewsArticle />
            </div>
        )
    }
    else if(!loggedIn && followingLink){
        return (
            <div>Following</div>
        )
    }
    else {
        return (
            <div className="videos">
                <Movies />
                <Movies /> 
                <Movies /> 
                <Movies /> 
                <Movies /> 
                <Movies />
                <Movies />
                <Movies /> 
                <Movies /> 
                <Movies /> 
                <Movies /> 
                <Movies />
                <Movies /> 
                <Movies /> 
                <Movies /> 
                <Movies />     
                <Movies /> 
                <Movies /> 
                <Movies /> 
                <Movies />          
            </div>
        )
    }
}