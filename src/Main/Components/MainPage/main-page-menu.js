import React, {useState} from 'react';
import '../../css/main.css';
import FullMain from '../MainPage/full-main-page';

export default function MainMenu({loggedIn}) {

    const [moviesLink, setMoviesLink] = useState();
    const [castingLink, setCastingLink] = useState();
    const [postLink, setPostLink] = useState();
    const [newsLink, setNewsLink] = useState();
    const [followingLink, setFollowingLink] = useState();

    const SetLink = (link) => {
        if (link === 'Movies') {
            setMoviesLink(true);
            setCastingLink(false);
            setPostLink(false);
            setNewsLink(false);
            setFollowingLink(false);
        }
        else if (link === 'Casting') {
            setMoviesLink(false);
            setCastingLink(true);
            setPostLink(false);
            setNewsLink(false);
            setFollowingLink(false);
        }
        else if (link === 'Posts') {
            setMoviesLink(false);
            setCastingLink(false);
            setPostLink(true);
            setNewsLink(false);
            setFollowingLink(false);
        }
        else if (link === 'News') {
            setMoviesLink(false);
            setCastingLink(false);
            setPostLink(false);
            setNewsLink(true);
            setFollowingLink(false);
        }
        else if (link === 'Following') {
            setMoviesLink(false);
            setCastingLink(false);
            setPostLink(false);
            setNewsLink(false);
            setFollowingLink(true);
        }
    }

    return (
        <div>
            <ul className="nav nav-pills nav-fill main-menu">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/" onClick={() => SetLink('Movies')}>MOVIES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/" onClick={() => SetLink('Casting')}>CASTING</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/" onClick={() => SetLink('Posts')}>POSTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/" onClick={() => SetLink('News')}>NEWS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/" onClick={() => SetLink('Following')}>FOLLOWING</a>
                </li>
            </ul>
            <div className="content-border"></div>
            <FullMain loggedIn={loggedIn} moviesLink={moviesLink} castingLink={castingLink} postLink={postLink} newsLink={newsLink} followingLink={followingLink}/>
        </div>
    )
}