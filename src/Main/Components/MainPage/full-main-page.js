import React from 'react'
import { Route, Switch } from "react-router-dom";
import '../../css/main.css';
import MainMovies from './main-movies';
import MainCasting from './main-casting';
import MainPosts from './main-posts';
import MainNews from './main-news';
import MainFollowing from './main-following';


export default function FullMain() {
    return (
        <Switch>
            <Route path='/casting'>
                <MainCasting/>
            </Route>
            <Route path='/posts'>
                <MainPosts/>
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
    )
}