import React, { useState, useEffect } from 'react';
import { firebaseDatabase } from '../../firebase'

export default function ProfileInfoEdit({userUID, name}) {


    const [userInfo, setUserInfo] = useState({});
    const [editClicked, setEditClicked] = useState();
    const [profileName, setProfileName] = useState(name);
    const [profileFavoriteMovies, setProfileFavoriteMovies] = useState('');
    const [profilePositions, setProfilePositions] = useState('');
    const [profileAgeRange, setProfileAgeRange] = useState('');
    const [profileBio, setProfileBio] = useState('');


    useEffect(() => {
        firebaseDatabase.ref('Profiles/' + userUID)
        .on("value", (snapshot) => {
            snapshot.forEach((snap) => {
                console.log(snap.val())
                setUserInfo(snap.val())
            })
        })
    }, [])

    const updateInfo = () => {   
        var userData = {
            name: profileName,
            favoriteMovies: profileFavoriteMovies,
            positions: profilePositions,
            ageRange: profileAgeRange,
            bio: profileBio
        };  

        // var newPostKey = firebaseDatabase.ref().key

        const update = {};
        update['Profiles/' + userUID + '/userInfo/'] = userData;
        sessionStorage.setItem('userName', profileName);
        document.getElementById('userInfo-section').value='';
        setEditClicked('')
        return firebaseDatabase.ref().update(update).key;
    }

    const userName = (editClicked) => {
        if(editClicked === "name"){
            return (
                < >
                <i class="bi bi-pencil-square" onClick={() => setEditClicked()}></i>
                <input type="text" class="form-control" id="profile-input" onChange={e => setProfileName(e.target.value)}/>
                <button type="button" className="btn btn-primary btn-lg" id="userInfo-section" onClick={() => updateInfo()}>POST</button>
                </>
            )
        }
        else{
            return (
                <>
                <i class="bi bi-pencil-square" onClick={() => setEditClicked('name')}></i>
                <h2>{userInfo.name}</h2>
                </>
            )
        }
    }
    
    const favoriteMovies = (editClicked) => {
        if(editClicked === "favoriteMovies"){
            return (
                <div className="profile-fav-movies profile-info">
                    <h5>FAVORITE MOVIES<i class="bi bi-pencil-square" onClick={() => setEditClicked()}></i></h5>
                    <input type="text" class="form-control" id="profile-input" onChange={e => setProfileFavoriteMovies(e.target.value)}/>
                    <button type="button" className="btn btn-primary btn-lg" id="userInfo-section" onClick={() => updateInfo()}>POST</button>
                </div>
            )
        }
        else{
            return (
                <div className="profile-fav-movies profile-info">
                    <h5>FAVORITE MOVIES<i class="bi bi-pencil-square" onClick={() => setEditClicked('favoriteMovies')}></i></h5>
                    <p>{userInfo.favoriteMovies}</p>
                </div>
            )
        }
    }

    const positions = (editClicked) => {
        if(editClicked === "positions"){
            return (
                <div className="profile-positions profile-info">
                    <h5>POSITIONS<i class="bi bi-pencil-square" onClick={()=> setEditClicked()}></i></h5>
                    <input type="text" class="form-control" id="profile-input" onChange={e => setProfilePositions(e.target.value)}/>
                    <button type="button" className="btn btn-primary btn-lg" id="userInfo-section" onClick={() => updateInfo()}>POST</button>
                </div>
            )
        }
        else{
            return (
                <div className="profile-positions profile-info">
                    <h5>POSITIONS<i class="bi bi-pencil-square" onClick={()=> setEditClicked('positions')}></i></h5>
                    <p>{userInfo.positions}</p>
                </div>
            )
        }
    }

    const ageRange = (editClicked) => {
        if(editClicked === "ageRange"){
            return (
                <div className="profile-positions profile-info">
                    <h5>AGE RANGE<i class="bi bi-pencil-square" onClick={()=> setEditClicked()}></i></h5>
                    <input type="text" class="form-control" id="profile-input" onChange={e => setProfileAgeRange(e.target.value)}/>
                    <button type="button" className="btn btn-primary btn-lg" id="userInfo-section" onClick={() => updateInfo()}>POST</button>
                </div>
            )
        }
        else{
            return (
                <div className="profile-positions profile-info">
                    <h5>AGE RANGE<i class="bi bi-pencil-square" onClick={()=> setEditClicked('ageRange')}></i></h5>
                    <p>{userInfo.ageRange}</p>
                </div>
            )
        }
    }

    const Bio = (editClicked) => {
        if(editClicked === "Bio"){
            return (
                <div className="profile-bio profile-info">
                    <h5>BIO<i class="bi bi-pencil-square" onClick={()=> setEditClicked(null)}></i></h5>
                    <input type="text" class="form-control" id="profile-input" onChange={e => setProfileBio(e.target.value)}/>
                    <button type="button" className="btn btn-primary btn-lg" id="userInfo-section" onClick={() => updateInfo()}>POST</button>
                </div>
            )
        }
        else{
            return (
                <div className="profile-bio profile-info">
                    <h5>BIO<i class="bi bi-pencil-square" onClick={()=> setEditClicked('Bio')}></i></h5>
                    <p>{userInfo.bio}</p>
                </div>
            )
        }
    }

    return (
        <div className="col-md-3 col-right">
            <div className="profile-top">
                {/* <img src="/src/img/simpsons-profile.jpg" alt="" /> */}
                <img className="profile-pic" src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.18169-9/13076696_1498675416825327_176923072612498417_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=mO1814RxUK0AX-32YnM&_nc_ht=scontent.fphx1-2.fna&oh=2e042e5b56ab9aad949f493bb129e3c1&oe=60FE4C25" alt=""/>
                {userName(editClicked)}
            </div>
            <div className="content-border">

            </div>
                {favoriteMovies(editClicked)}

                {positions(editClicked)}

                {ageRange(editClicked)}

                {Bio(editClicked)}
        </div>
    )
}