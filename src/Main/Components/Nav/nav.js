import React, {useEffect} from 'react';
import {firebase} from '../../firebase'
import '../../css/nav.css'


export default function Nav({setSignIn, loggedIn, setLoggedIn, name, signIn}){

    // const signUpMethod = () => {
    //     firebase.auth().createUserWithEmailAndPassword()
    //     .then((userCredential) => {
    //         // Signed in 
    //         var user = userCredential.user;
    //         setLoggedIn(true)
    //     })
    //     .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // ..
    //     });
    // }
    
    // const signInFunction = () => {
    //     setSignIn(true)
    //     console.log(signIn)
    // }
    useEffect(() => {
            setSignIn(true)
            console.log(signIn)
    })

    const signOutMethod = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedIn(false)
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
                                <li><a className="dropdown-item" href="#/">Post Casting Call</a></li>
                                <li><a className="dropdown-item" href="#/">Find Crew Members</a></li>
                            </ul>
                        </li>
                    </ul>
                    <a className="nav-link" href="#/" tabindex="-1" onClick={() => signOutMethod()}>Sign Out</a>
            </div>
        }
        else{
            return <button type="button" className="btn btn-primary sign-in" data-bs-toggle="modal" data-bs-target="#signIn" >
                Sign In
            </button>                                           
        }
    }


    return (
        <div className="Nav sticky-top">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Reel Collaboration</a>
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
                                <li><a className="dropdown-item" href="#/">Post Casting Call</a></li>
                                <li><a className="dropdown-item" href="#/">Find Crew Members</a></li>
                                <li><a className="dropdown-divider"></a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Production
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#/">Budgeting</a></li>
                                <li><a className="dropdown-item" href="#/">Scheduling</a></li>
                                <li><a className="dropdown-divider"></a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Post-Production
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#/">Post Trailer</a></li>
                                <li><a className="dropdown-item" href="#/">Enter Festivals</a></li>
                                <li><a className="dropdown-divider"></a></li>
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
