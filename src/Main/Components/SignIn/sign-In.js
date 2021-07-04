import React, {useState} from 'react';
import {firebase, firebaseDatabase} from '../../firebase'
import '../../css/signInUp.css'

export default function SignInModal({signIn, setLoggedIn, setName, name, setSignIn}) {

  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [name, setName] = useState();

  // const submitProfileName = (name) => {
  //   console.log('Check...Check')
  //   firebaseDatabase.ref('Profiles/' + name).push().set({
  //     name: {name}
  //   })
  // }

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

  const signUpMethod = () => {
    firebaseDatabase.ref('Profiles/' + name).push().set({
      name: {name}
    })
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
  }

  const signUpFunction = () => {
    setSignUp(true)
    setSignIn(false)
  }

  const signInFunction = () => {
    setSignUp(false)
    setSignIn(true)
  }

  if(signIn) {
    return ( 
      <div className="modal fade" id="signIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">SIGN IN</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* <input type="name" className="form-control signIn-inputs" id="name" placeholder="Name" name="Sign-In-Name" onChange={e => setName(e.target.value)}></input> */}
                <input type="email" className="form-control signIn-inputs" id="email" placeholder="Email" name="Sign-In-Email" onChange={e => setEmail(e.target.value)}></input>
                <input type="password" className="form-control signIn-inputs" id="password" placeholder="Password" name="Sign-In-Password" onChange={e => setPassword(e.target.value)}></input>
                <p>No Account <a href="#/" data-bs-toggle="modal" data-bs-target="#signUp" onClick={() => signUpFunction()}>Sign Up</a></p>
                <button type="button" className="btn btn-primary btn-sign-in" data-bs-dismiss="modal"onClick={() => signInMethod()}>Sign In</button>
              </div>
              {/* <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"onClick={() => signInMethod()}>Sign In</button>
              </div> */}
          </div>
        </div>
      </div>
    );
  }
  else if(signUp && !signIn){
    return (
      <div className="modal fade" id="signUp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">SIGN UP</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="name" className="form-control signIn-inputs" id="name" placeholder="Name" name="Sign-In-Name" onChange={e => setName(e.target.value)}></input>
                  <input type="email" className="form-control signIn-inputs" id="email" placeholder="Email" name="Sign-In-Email" onChange={e => setEmail(e.target.value)}></input>
                  <input type="password" className="form-control signIn-inputs" id="password" placeholder="Password" name="Sign-In-Password" onChange={e => setPassword(e.target.value)}></input>
                  <p>Already Have An Account <a href="#/" data-bs-toggle="modal" data-bs-target="#signIn" onClick={() => signInFunction()}>Sign In</a></p>
                  <button type="button" className="btn btn-primary btn-sign-in" data-bs-dismiss="modal"onClick={() => signUpMethod()}>Create Account</button>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"onClick={() => signUpMethod()}>Create Account</button>
                </div> */}
            </div>
        </div>
      </div>
    )
  }
  else {
    return null
  }
}




