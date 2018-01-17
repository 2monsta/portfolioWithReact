import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <span className="myName">Jason Li</span>
        </div>
        <div className='row center'>
          <div className='col-sm-12'>
            <h2 className="topDescription">Hi! I'm glad you found me.</h2>
          </div>
          <div className='col-sm-6'>
            <p className="bottomDescription">I'm Jason - I'm a web developer & prgrammer living in metro Atlanta. I'm proficient with node.js and react.js but is willing to learn other technologies.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;