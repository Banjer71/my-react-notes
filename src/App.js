import React, { Component } from 'react';

import Main from './components/Main'
//import User from './User'
//import ButtonChange from './Button_change'
import './App.css';
import Navbar from './navbar/Navbar';




class App extends Component {
  
  render() { 
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}


export default App;
