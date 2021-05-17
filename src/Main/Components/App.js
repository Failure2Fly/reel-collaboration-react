import React from 'react';
// import { render } from '@testing-library/react';
import './css/App.css';
import Nav from './Nav/nav'
import NavBottom from './Nav/nav-bottom'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Nav />
        <NavBottom/>
      </div>
    );
  }
}

export default App;
