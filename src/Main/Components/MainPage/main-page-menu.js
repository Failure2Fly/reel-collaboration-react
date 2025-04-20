import React from 'react';
// import { Link } from "react-router-dom";
import '../../css/main.css';
import FullMain from './full-main-page';
import MainHeader from './main-header';

export default function MainMenu({loggedIn, name, userUID, setPosts, posts}) {

    return (
        <div className="main-menu">
            <MainHeader loggedIn={loggedIn}/>
            {/* <ul className="nav nav-pills nav-fill main-menu-links">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to='/movies' >MOVIES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/casting' >CASTING</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/posts' >POSTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/news' >NEWS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/following' >FOLLOWING</Link>
                </li>
            </ul> */}
            <div className="content-border"></div>
            <FullMain loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts}/>
        </div>
    )
}