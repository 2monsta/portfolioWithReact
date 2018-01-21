import React, { Component } from 'react';



// could later look it up using the database
class Projects extends Component {
	render() {
		return (
			<div>
				<div className='row videoContent'>
					<div className='pageInfo'>
						<h1>Projects</h1>
					</div>
					{/* mgntze */}
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<h3><a href="mgntze.jyl.io">Magnetize</a> | <a href="">Github</a></h3>
						</span>
						<video src="video/mgntze.mp4" autoPlay='true' loop='true'></video>
					</div>
					{/* petbasket */}
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<h3><a href="petbasket.jyl.io">PetBasket</a> | <a href="https://github.com/2monsta/petBasket">Github</a></h3>
						</span>
						<video src="video/petBasket.mov" autoPlay='true' loop='true'></video>
					</div>
					{/* NavApp */}
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
							<h3><a href="navapp.jyl.io">NavApp</a> | <a href="https://github.com/2monsta/FrontEndProject">Github</a></h3>
						</span>
						<video src="video/NavApp.mov" autoPlay='true' loop='true'></video>
					</div>
				</div>
				{/* Todo */}
				<div className='row'>
					<div className='col-xs-12 col-sm-4'>
						<span className='overlay'>
						<h3><span className='todo'>ToDo</span> | <a href="https://github.com/2monsta/react-express-todo">Github</a></h3>
						</span>
						<video src="video/ToDo.mov" autoPlay='true' loop='true'></video>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;