import React, { useState } from 'react';
import { firebaseDatabase} from '../../firebase'

export default function ProfileInfoEdit({userUID}) {

    const [editClicked, setEditClicked] = useState();
    const [profileInfoName, setProfileInfoName] = useState();

    const enterBio = () => {
        console.log(userUID)
        firebaseDatabase.ref('Profiles/' + userUID + '/userInfo').push().set({
            name: profileInfoName
        })
    }

    const name = (editClicked) => {
        if(editClicked === "name"){
            return (
                < >
                <i class="bi bi-pencil-square" onClick={() => setEditClicked()}></i>
                <input type="text" class="form-control" id="profile-input" onChange={e => setProfileInfoName(e.target.value)}/>
                <button type="button" className="btn btn-primary btn-lg" onClick={() => enterBio()}>POST</button>
                </>
            )
        }
        else{
            return (
                <>
                <i class="bi bi-pencil-square" onClick={() => setEditClicked('name')}></i>
                <h2>Anna Kendrick</h2>
                </>
            )
        }
    }
    
    const favoriteMovies = (editClicked) => {
        if(editClicked === "favoriteMovies"){
            return (
                <div className="profile-fav-movies profile-info">
                    <h5>FAVORITE MOVIES<i class="bi bi-pencil-square" onClick={() => setEditClicked()}></i></h5>
                    <input type="text" class="form-control" id="profile-input" />
                </div>
            )
        }
        else{
            return (
                <div className="profile-fav-movies profile-info">
                    <h5>FAVORITE MOVIES<i class="bi bi-pencil-square" onClick={() => setEditClicked('favoriteMovies')}></i></h5>
                    <p>Pitch Perfect, Into The Woods, Trolls, Noelle, Mike and Dave Need Wedding Dates</p>
                </div>
            )
        }
    }

    const positions = (editClicked) => {
        if(editClicked === "positions"){
            return (
                <div className="profile-positions profile-info">
                    <h5>POSITIONS<i class="bi bi-pencil-square" onClick={()=> setEditClicked()}></i></h5>
                    <input type="text" class="form-control" id="profile-input" />
                </div>
            )
        }
        else{
            return (
                <div className="profile-positions profile-info">
                    <h5>POSITIONS<i class="bi bi-pencil-square" onClick={()=> setEditClicked('positions')}></i></h5>
                    <p>Pitch Perfect, Into The Woods, Trolls, Noelle, Mike and Dave Need Wedding Dates</p>
                </div>
            )
        }
    }

    const ageRange = (editClicked) => {
        if(editClicked === "ageRange"){
            return (
                <div className="profile-positions profile-info">
                    <h5>AGE RANGE<i class="bi bi-pencil-square" onClick={()=> setEditClicked()}></i></h5>
                    <input type="text" class="form-control" id="profile-input" />
                </div>
            )
        }
        else{
            return (
                <div className="profile-positions profile-info">
                    <h5>AGE RANGE<i class="bi bi-pencil-square" onClick={()=> setEditClicked('ageRange')}></i></h5>
                    <p>25-35</p>
                </div>
            )
        }
    }

    const Bio = (editClicked) => {
        if(editClicked === "Bio"){
            return (
                <div className="profile-bio profile-info">
                    <h5>BIO<i class="bi bi-pencil-square" onClick={()=> setEditClicked(null)}></i></h5>
                    <input type="text" class="form-control" id="profile-input" />
                </div>
            )
        }
        else{
            return (
                <div className="profile-bio profile-info">
                    <h5>BIO<i class="bi bi-pencil-square" onClick={()=> setEditClicked('Bio')}></i></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            )
        }
    }

    return (
        <div className="col-md-3 col-right">
            <div className="profile-top">
                {/* <img src="/src/img/simpsons-profile.jpg" alt="" /> */}
                <img className="profile-pic" src="https://cdn.filestackcontent.com/vxZqhajcTPWNBMjFFOUj" alt=""/>
                {name(editClicked)}
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