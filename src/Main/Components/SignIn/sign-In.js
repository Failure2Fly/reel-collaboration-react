import React, {useState} from 'react';
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore"; 
import '../../css/signInUp.css'
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {db} from "../../firebase";


export default function SignInModal({signIn, setLoggedIn, loggedIn, setName, name, setSignIn, userUID, setUserUID}) {

  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();
  const auth = getAuth();

  const findUserUID = (uid) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // setName(loginInfo.name)
        // console.log(loginInfo.name)
        // sessionStorage.setItem('userName', loginInfo.name);
        sessionStorage.setItem('uid', uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    // doc.database().ref('Profiles/' + uid )
    // .on('value', (snapshot) => {
    //   snapshot.forEach((snap) => {
    //     const loginInfo = snap.val();
    //     // console.log(loginInfo)
    //     setName(loginInfo.name)
    //     // console.log(loginInfo.name)
    //     sessionStorage.setItem('userName', loginInfo.name);
    //     sessionStorage.setItem('uid', uid);
    //   })
    // });
  }

  const pushUserInfo =  async (uid) => {
    const profilePush = await addDoc(collection(db, "Profiles"), {
      timeSubmitted: Date(),
      name: name,
      favoriteMovies: '',
      positions: '',
      ageRange: '',
      bio: ''
    });
    setDoc.ref('Profiles/' + uid + '/loginInfo').set({
      name: name,
      email: email, 
      password: password
    })
    setDoc.ref('Profiles/' + uid + '/userInfo').set({
      name: name,
      favoriteMovies: '',
      positions: '',
      ageRange: '',
      bio: ''
    })
    const docId = doc.uid;
    sessionStorage.setItem('docId', docId);
    sessionStorage.setItem('userName', name);
  }

  const signInMethod = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const uid = user.uid
      console.log(uid);
      setLoggedIn(true);
      sessionStorage.setItem('loggedIn', true);
      setUserUID(uid);
      findUserUID(uid);
      navigate('/profile');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
    // .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    // });
  }

  const signUpMethod = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      const uid = user.uid
      setLoggedIn(true)
      setUserUID(uid)
      pushUserInfo(uid);
      findUserUID(uid);
      navigate('/profile');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
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
              <input type="email" className="form-control signIn-inputs" id="email" placeholder="Email" name="Sign-In-Email" onChange={e => setEmail(e.target.value)}></input>
              <input type="password" className="form-control signIn-inputs" id="password" placeholder="Password" name="Sign-In-Password" onChange={e => setPassword(e.target.value)}></input>
              <p>No Account <a href="#/" data-bs-toggle="modal" data-bs-target="#signUp" onClick={() => signUpFunction()}>Sign Up</a></p>
              <button type="button" className="btn btn-primary btn-sign-in" data-bs-dismiss="modal"onClick={() => signInMethod()}>Sign In</button>
            </div>
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
          </div>
        </div>
      </div>
    )
  }
  else {
    return null
  }
}





