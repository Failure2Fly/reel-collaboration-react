import React from 'react';
import '../../css/profile.css';
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';
import Movies from '../Movies/movies';
import ProfileInfo from './bio-others';

export default function Profile({loggedIn, name, userUID, setPosts, posts}){

    return (       
        <div className="container-fluid profile-page">
            <div className="row">
                <div className="col-md-9 col-left">
                    <div className="videos">
                        <Movies />
                        <Movies /> 
                        <Movies />     
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
                <ProfileInfo loggedIn={loggedIn} userUID={userUID}/>
            </div>
        </div>
    )
}