import React from 'react';
import '../../css/profile.css';
import PostSubmit from '../Post/postSubmit';
import Post from '../Post/post';
import Movies from '../Movies/movies';

export default function Profile({loggedIn, name, userUID, setPosts, posts}){

    if(loggedIn){
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
                    <div className="col-md-3 col-right">
                        <div className="profile-top">
                            {/* <img src="/src/img/simpsons-profile.jpg" alt="" /> */}
                            <img className="profile-pic" src="https://cdn.filestackcontent.com/vxZqhajcTPWNBMjFFOUj" alt=""/>
                            <h2>Anna Kendrick</h2>
                        </div>
                        <div className="content-border">

                        </div>
                        <div className="profile-fav-movies profile-info">
                            <h5>FAVORITE MOVIES</h5>
                            <p>Pitch Perfect, Into The Woods, Trolls, Noelle, Mike and Dave Need Wedding Dates</p>
                        </div>
                        <div className="profile-positions profile-info">
                            <h5>POSITIONS</h5>
                            <p>Actress, Singer</p>
                        </div>
                        <div className="profile-positions profile-info">
                            <h5>AGE RANGE</h5>
                            <p>25-35</p>
                        </div>
                        <div className="profile-bio profile-info">
                            <h5>BIO</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return null
    }
}