import React, {useState, useEffect} from 'react';
import '../css/App.css';
import Nav from './Nav/nav';
import PostCastingCall from './MainPage/NavLinks/post-casting-call';
import FindCrewMembers from './MainPage/NavLinks/find-crew-members';
import Screenwriting from './MainPage/NavLinks/screenwriting';
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
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [name, setName] = useState();
  const [userUID, setUserUID] = useState();
  const [posts, setPosts] = useState([]) 

  const setItems = () => {
    setLoggedIn(sessionStorage.getItem('loggedIn'));
    setName(sessionStorage.getItem('userName'));
    setUserUID(sessionStorage.getItem('uid'));
    sessionStorage.clear();
  }

  useEffect(() =>{
    setItems();

  }, []) 

  return (
    <Router>
      <div className="App">
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setSignIn={setSignIn} name={name} signIn={signIn} />
        <MainMenu loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts} />
        <SignInModal signIn={signIn} setSignIn={setSignIn} setLoggedIn={setLoggedIn} loggedIn={loggedIn}setName={setName} name={name} setUserUID={setUserUID} userUID={userUID}/>
        <Routes>
          {/* <Route path='/' element={<MainMenu/>} /> */}
          {/* <Route path='/' element={<MainMenu/>} loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts} /> */}
          <Route path='/post-casting-call' element={<PostCastingCall/>} />
          <Route path='/find-crew-members' element={<FindCrewMembers/>} />
          <Route path='/screenwriting' element={<Screenwriting/>} />
          <Route path='/budgeting' element={<Budgeting/>} />
          <Route path='/scheduling' element={<Scheduling/>} />
          <Route path='/post-trailer' element={<PostTrailer/>} />
          <Route path='/enter-festivals' element={<EnterFestivals/>} />
          <Route path='/tools' element={<Tools/>} />
          <Route path='/advice' element={<Advice/>} />
          <Route path='/festivals' element={<Festivals/>} />
          <Route path='/forums' element={<Forums/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/profile' element={<Profile loggedIn={loggedIn} name={name} userUID={userUID} setPosts={setPosts} posts={posts}/>} />
        </Routes>
        <NavBottom />
      </div>
    </Router>
  );
}

