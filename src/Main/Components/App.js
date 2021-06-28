import React, {useState} from 'react';
import '../css/App.css';
import Nav from './Nav/nav'
import SignInModal from './SignIn/sign-In'
import Profile from './Profile/profile'
import NavBottom from './Nav/nav-bottom'

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [name, setName] = useState();

  return (
    <div className="App">
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setSignIn={setSignIn} name={name} signIn={signIn} />
      <SignInModal signIn={signIn} setLoggedIn={setLoggedIn} setName={setName}/>
      <Profile />
      <NavBottom />
    </div>
  );
}

