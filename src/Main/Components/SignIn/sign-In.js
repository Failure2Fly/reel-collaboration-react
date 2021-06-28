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
      <div className="modal fade" id="signIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="name" className="form-control signIn-inputs" id="name" placeholder="Name" name="Sign-In-Name" onChange={e => setName(e.target.value)}></input>
                  <input type="email" className="form-control signIn-inputs" id="email" placeholder="Email" name="Sign-In-Email" onChange={e => setEmail(e.target.value)}></input>
                  <input type="password" className="form-control signIn-inputs" id="password" placeholder="Password" name="Sign-In-Password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"onClick={() => signInMethod()}>Save changes</button>
                </div>
            </div>
        </div>
      </div>
    );
  }else {
    return null
  }
}




