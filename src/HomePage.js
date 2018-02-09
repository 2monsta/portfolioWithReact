import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className='row firstIntro'>
        <div className='col-sm-12'>
          <span className="myName">Jason Li</span>
        </div>
        <div className='row secondIntro'>
          <div className='col-sm-12'>
            <h2 className="topDescription">Hi! I'm glad you found me.</h2>
          </div>
          <div className='col-sm-offset-3 col-sm-6'>
            <h4 className="bottomDescription">I'm Jason - a web developer & prgrammer living in metro Atlanta. I'm proficient with node.js and react.js.</h4>
            <h4 className="bottomDescription">I'm currently working with ASP.NET framework and is learning C# and OOP Principles.</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;