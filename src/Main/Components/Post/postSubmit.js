import React, { useState } from 'react';
import '../../css/post.css';
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import {db} from "../../firebase";

export default function PostSubmit({loggedIn, name, userUID}) {

  const [postDescription, setPostDescription] = useState();

  // const testSubmit = () => {
  //     fetch('https://randomuser.me/api/?results=20', {
  //         method: 'get'
  //     })
  //     .then(response => response.json())
  //     .then(jsonData => console.log(jsonData))
  // }

  const submitPost = async() => {
    const postsPush = await addDoc(collection(db, "Posts"), {
      timeSubmitted: Date(),
      post: postDescription,
      userName: name,
      userUID: userUID
    });
    // console.log(name)
    // firebaseDatabase.push().set({
    //     timeSubmitted: Date(),
    //     post: postDescription,
    //     userName: name,
    //     userUID: userUID
    // })
    // firebaseDatabase.ref('Profiles/' + userUID + '/posts').push().set({
    //     timeSubmitted: Date(),
    //     post: postDescription,
    //     userName: name,
    //     userUID: userUID
    // })
    // document.getElementById('user-post').value='';
    console.log("Document written with ID: ", postsPush.id);
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
    return(
      <div className="postSubmit">
        <textarea id="user-post" className="form-control" rows="3" name="PostDescription" onChange={e => setPostDescription(e.target.value)}>
        </textarea>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => submitPost()}>POST</button>
      </div>
    )
  }
}