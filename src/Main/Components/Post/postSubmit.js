import React, { useState } from 'react';
import '../../css/post.css';
import { firebaseDatabase, firebaseAllPosts } from '../../firebase';

export default function PostSubmit({loggedIn, name, userUID}) {

    const [postDescription, setPostDescription] = useState();

    // const testSubmit = () => {
    //     fetch('https://randomuser.me/api/?results=20', {
    //         method: 'get'
    //     })
    //     .then(response => response.json())
    //     .then(jsonData => console.log(jsonData))
    // }

    const submitPost = () => {
        console.log(name)
        firebaseAllPosts.push().set({
            timeSubmitted: Date(),
            post: postDescription,
            userName: name,
            userUID: userUID
        })
        firebaseDatabase.ref('Profiles/' + userUID + '/posts').push().set({
            timeSubmitted: Date(),
            post: postDescription,
            userName: name,
            userUID: userUID
        })
        document.getElementById('user-post').value='';
    }

    if(loggedIn){
        return(
            <div className="postSubmit">
                <textarea id="user-post" className="form-control" rows="3" name="PostDescription" onChange={e => setPostDescription(e.target.value)}>
                </textarea>
                <button type="button" className="btn btn-primary btn-lg" onClick={() => submitPost()}>POST</button>
            </div>
        )
    }
    else {
        return null;
    }
}