import React from 'react';
import ProfileInfoEdit from './bio-users';

export default function ProfileInfo({loggedIn, userUID, name}) {

    if(loggedIn){
        return (
            <ProfileInfoEdit userUID={userUID} name={name}/>
        )
    }
    else{
        return (
            <div className="col-md-3 col-right">
            <div className="profile-top">
                <img className="profile-pic" alt=""/>
                <h2>Name Here</h2>
            </div>
            <div className="content-border">

            </div>
            <div className="profile-fav-movies profile-info">
                <h5>FAVORITE MOVIES</h5>
            </div>
            <div className="profile-positions profile-info">
                <h5>POSITIONS</h5>
            </div>
            <div className="profile-positions profile-info">
                <h5>AGE RANGE</h5>
            </div>
            <div className="profile-bio profile-info">
                <h5>BIO</h5>
            </div>
        </div>
        )
    }
}
