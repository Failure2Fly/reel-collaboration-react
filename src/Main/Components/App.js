import React from 'react';
// import { render } from '@testing-library/react';
import './css/App.css';
import Nav from './Nav/nav'
import SignInModal from './SignIn/sign-In'
import NavBottom from './Nav/nav-bottom'

class App extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
        showModal: false
    }
    this.signIn = this.signIn.bind(this);
    
  }
  
  signIn = () => {
    this.state.showModal = true
  }

  render() {
    return (
      <div className="App">
        <Nav signIn={this.signIn}/>
        <NavBottom/>
      </div>
    );
  }
}

export default App;
