import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import  HomePage from "./HomePage";
import Projects from './Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App container">
        <Navbar />
        <Route exact path='/' component={HomePage}/>
				<Route exact path='/projects' component={Projects} />
      </div>
      </Router>
    );
  }
}

export default App;
