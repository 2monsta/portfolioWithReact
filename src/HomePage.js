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
            <h4 className="bottomDescription">I'm Jason - a web developer & prgrammer living in metro Atlanta. I'm proficient with node.js and react.js but is willing to learn other technologies/frameworks.</h4>
          </div>
        </div>

				{/* can change this to a database later */}
				<div className='row linkButtons'>
					<div className='col-xs-12 col-sm-3'>
						<button className='btn btn-primary btn-lg'>Linkedin</button>
					</div>
					<div className='col-xs-12 col-sm-3'>
						<button className='btn btn-primary btn-lg'>Github</button>
					</div>
					<div className='col-xs-12 col-sm-3'>
						<button className='btn btn-primary btn-lg'>Resume</button>
					</div>
					<div className='col-xs-12 col-sm-3'>
						<button className='btn btn-primary btn-lg'>Resume</button>
					</div>
				</div>
      </div>
    );
  }
}

export default HomePage;