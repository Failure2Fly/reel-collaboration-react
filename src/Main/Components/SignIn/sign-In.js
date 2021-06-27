import React, {useState} from 'react';
import {firebase} from '../../firebase'
import '../../css/signInUp.css'

export default function SignInModal({signIn, setLoggedIn, setName}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const signInMethod = () => {
    console.log('hello')
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setLoggedIn(true)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
  }

  if(signIn) {
    return ( 
      <div class="modal fade" id="signIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <input type="text" className="form-control" id="name" placeholder="Name" name="Sign-In-Email" onChange={e => setName(e.target.value)}></input>
                  <input type="email" className="form-control" id="emailAddress" placeholder="Email" name="Sign-In-Email" onChange={e => setEmail(e.target.value)}></input>
                  <input type="password" className="form-control" id="password" placeholder="Password" name="Sign-In-Password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => signInMethod()}>Save changes</button>
                </div>
            </div>
        </div>
      </div>
    );
  }else {
    return <div>nothing</div>
  }
}




