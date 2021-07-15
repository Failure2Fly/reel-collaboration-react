import React, {useState, useEffect} from 'react';
import '../css/App.css';
import Nav from './Nav/nav';
import PostCastingCall from './MainPage/NavLinks/post-casting-call';
import FindCrewMembers from './MainPage/NavLinks/find-crew-members';
import Budgeting from './MainPage/NavLinks/budgeting';
import Scheduling from './MainPage/NavLinks/scheduling';
import PostTrailer from './MainPage/NavLinks/post-trailer';
import EnterFestivals from './MainPage/NavLinks/enter-festivals';
import Tools from './MainPage/NavLinks/tools';
import Advice from './MainPage/NavLinks/advice';
import Festivals from './MainPage/NavLinks/festivals';
import Forums from './MainPage/NavLinks/forums';
import SignInModal from './SignIn/sign-In';
import MainMenu from './MainPage/main-page-menu';
import AboutUs from './MainPage/NavLinks/about-us';
import Profile from './Profile/profile';
import NavBottom from './Nav/nav-bottom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [name, setName] = useState();
  const [userUID, setUserUID] = useState();
  const [posts, setPosts] = useState([]) 

  const setItems = () => {
    setLoggedIn(sessionStorage.getItem('loggedIn'));
    setName(sessionStorage.getItem('userName'));
  }

  useEffect(() =>{
    setItems();
  }, []) 

  return (
    <Router>
      <div className="App">
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setSignIn={setSignIn} name={name} signIn={signIn} />
        <SignInModal signIn={signIn} setSignIn={setSignIn} setLoggedIn={setLoggedIn} loggedIn={loggedIn}setName={setName} name={name} setUserUID={setUserUID} userUID={userUID}/>
          <Switch>
            <Route path='/post-casting-call'>
                <PostCastingCall/>
            </Route>
            <Route path='/find-crew-members'>
                <FindCrewMembers/>
            </Route>
            <Route path='/budgeting'>
                <Budgeting/>
            </Route>
            <Route path='/scheduling'>
                <Scheduling/>
            </Route>
            <Route path='/post-trailer'>
                <PostTrailer/>
            </Route>
            <Route path='/enter-festivals'>
                <EnterFestivals/>
            </Route>
            <Route path='/tools'>
                <Tools/>
            </Route>
            <Route path='/advice'>
                <Advice/>
            </Route>
            <Route path='/festivals'>
                <Festivals/>
            </Route>
            <Route path='/forums'>
                <Forums/>
            </Route>
            <Route path='/about-us'>
                <AboutUs/>
            </Route>
            <Route path='/profile'>
              <Profile loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts}/>  
            </Route>
            <Route path='/'>
              <MainMenu loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts}/>
            </Route>
          </Switch>
        <NavBottom />
      </div>
    </Router>
  );
}

