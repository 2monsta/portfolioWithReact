import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="text-left">
            <span className='name'>Jason</span>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <li>Projects</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;