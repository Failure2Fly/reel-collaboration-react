import React from 'react'
import { Route, Switch } from "react-router-dom";
import '../../css/main.css';
import MainMovies from './main-movies';
import MainCasting from './main-casting';
import MainPosts from './main-posts';
import MainNews from './main-news';
import MainFollowing from './main-following';


export default function FullMain({loggedIn, name, userUID, setPosts, posts}) {
    return (
        <div className="all-main-page">
            <Switch>
                <Route path='/casting'>
                    <MainCasting/>
                </Route>
                <Route path='/posts'>
                    <MainPosts loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts}/>
                </Route>
                <Route path='/news'> 
                    <MainNews/>
                </Route>
                <Route path='/following'>
                    <MainFollowing/>
                </Route>
                <Route path={['/movies', '/']}>
                    <MainMovies/>
                </Route>
            </Switch>
        </div>
    )
}