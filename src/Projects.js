import React, { Component } from 'react';



// could later look it up using the database
class Projects extends Component {
	render() {
		return (
			<div>
				<div className='row videoContent'>
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<span>HelloWorld</span>
						</span>
						<video src="video/mgntze.mp4"></video>
					</div>
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<span>HelloWorld</span>
						</span>
						<video src="video/petBasket.mov"></video>
					</div>
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<span>HelloWorld</span>
						</span>
						<video src="video/NavApp.mov"></video>
					</div>
				</div>
				<div className='row'>
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<span>HelloWorld</span>
						</span>
						<video src="video/ToDo.mov"></video>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;