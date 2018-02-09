import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="text-left">
            <Link to='/'><span className='name'>Jason</span></Link>
            <ul className='hidden-xs'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/projects'><li>Projects</li></Link>
              <li>Skills</li>
              <li>Resume/Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;