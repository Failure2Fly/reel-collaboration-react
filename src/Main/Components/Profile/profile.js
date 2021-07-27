import React, { useState, useEffect } from 'react';
import '../../css/profile.css';
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';
import MoviesProfilePage from '../Movies/movies-profile-page';
import ProfileInfo from './bio-others';
import { firebaseDatabase } from '../../firebase'

export default function Profile({loggedIn, name, userUID, setPosts, posts}){

    const [userInfo, setUserInfo] = useState([]);

    useEffect((userUID) => {  
        let isMounted = true;
        const updateUserInfo = async () => {
            firebaseDatabase.ref('Profiles/' + userUID)
            .on("value", (snapshot) => {
                snapshot.forEach((snap) => {
                    if (isMounted) setUserInfo((userInfo) => [...userInfo, snap.val()])
                })
            })
        }

        updateUserInfo(userInfo); 

        return () => {
            isMounted = false;
        } 
    }, [userInfo])
    console.log(userInfo)
    // console.log(userInfo[1].name)

    return (       
        <div className="container-fluid profile-page">
            <div className="row">
                <div className="col-md-9 col-left">
                    <div className="videos">
                        <MoviesProfilePage />    
                    </div>
                    <div className="content-border">

                    </div>
                    <div className="post-section" >
                        <div className="post-section-left" >

                        </div>
                        <div className="AllPost">
                            <PostSubmit name={name} loggedIn={loggedIn} userUID={userUID}/>
                            <Post setPosts={setPosts} posts={posts} userUID={userUID}/>
                        </div>
                    </div>
                </div>  
                <ProfileInfo loggedIn={loggedIn} userUID={userUID} name={name} userInfo={userInfo} setUserInfo={setUserInfo} />
            </div>
        </div>
    )
}