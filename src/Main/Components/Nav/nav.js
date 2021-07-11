import React from 'react';
import {firebase} from '../../firebase';
import '../../css/nav.css';
import { Link } from "react-router-dom";



export default function Nav({setSignIn, loggedIn, setLoggedIn, name, signIn}){

    
    const signInFunction = () => {
        setSignIn(true)
        console.log(signIn)
    }

    const signOutMethod = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedIn(false)
            sessionStorage.setItem('loggedIn', false);
            console.log(loggedIn)
          })
          .catch((error) => {
            // An error happened.
          });
    }

    const greeting = () => {
        if(loggedIn){
            return <div className="profile-link">                            
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {name}
                            </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/notifications">Notifications</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <Link className="nav-link" to="/" tabindex="-1" onClick={() => signOutMethod()}>Sign Out</Link>
            </div>
        }
        else{
            return <button type="button" className="btn btn-primary sign-in" data-bs-toggle="modal" data-bs-target="#signIn" onClick={() => signInFunction()}>
                Sign In
            </button>                                           
        }
    }


    return (
        <div className="Nav sticky-top">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Reel Collaboration</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll full-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pre-Production
                            </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="/post-casting-call">Post Casting Call</Link></li>
                                <li><Link className="dropdown-item" to="/find-crew-members">Find Crew Members</Link></li>
                                {/* <li><a className="dropdown-divider"></a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Production
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="/budgeting">Budgeting</Link></li>
                                <li><Link className="dropdown-item" to="/scheduling">Scheduling</Link></li>
                                {/* <li><a className="dropdown-divider"></a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Post-Production
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="/post-trailer">Post Trailer</Link></li>
                                <li><Link className="dropdown-item" to="/enter-festivals">Enter Festivals</Link></li>
                                {/* <li><a className="dropdown-divider"></a></li> */}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {greeting()} 
                    </div>
                </div>
            </nav>
        </div>
    );
}
