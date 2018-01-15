import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';
import  HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
