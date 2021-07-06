import React, {useState} from 'react';
import '../css/App.css';
import Nav from './Nav/nav'
import SignInModal from './SignIn/sign-In'
import MainMenu from './MainPage/main-page-menu';
import Profile from './Profile/profile'
import NavBottom from './Nav/nav-bottom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [name, setName] = useState();

  return (
    <Router>
      <div className="App">
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setSignIn={setSignIn} name={name} signIn={signIn} />
        <SignInModal signIn={signIn} setSignIn={setSignIn} setLoggedIn={setLoggedIn} setName={setName} name={name}/>
          <Switch>
            <Route path='/profile'>
              <Profile loggedIn={loggedIn} name={name}/>  
            </Route>
            <Route path='/'>
              <MainMenu loggedIn={loggedIn}/>
            </Route>
          </Switch>
        <NavBottom />
      </div>
    </Router>
  );
}

