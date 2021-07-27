import React from 'react';
import ProfileInfoEdit from './bio-users';

export default function ProfileInfo({loggedIn, userUID, name, userInfo, setUserInfo}) {

    if(loggedIn){
        return (
            <ProfileInfoEdit userUID={userUID} name={name} userInfo={userInfo} setUserInfo={setUserInfo}/>
        )
    }
    else{
        return (
            <div className="col-md-3 col-right">
                <div className="profile-top">
                    <img className="profile-pic" alt=""/>
                    <h2>Name</h2>
                </div>
                <div className="content-border">
    
                </div>
                <div className="profile-fav-movies profile-info">
                    <h5>Favorite Movies</h5>
                </div>
                <div className="profile-positions profile-info">
                    <h5>Positions</h5>
                </div>
                <div className="profile-ageRange profile-info">
                    <h5>Age Range</h5>
                </div>
                <div className="profile-bio profile-info">
                    <h5>Bio</h5>
                </div>
            </div>
        )
    }
}
