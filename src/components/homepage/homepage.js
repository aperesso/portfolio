mport React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';


import './../../stylesheets/css/homepage/homepage.min.css'


class Homepage extends Component {

	render() {
		return (
			<div className="Homepage">
				<div className="left" id="left">
					<h3 className="text"> FRONT END WEB DEVELOPER </h3>
					<h4 className="text"> Alexia Peresson </h4>
				</div>
				<div className="right">
					<Three/>
				</div>

				<p> scroll down for more </p>

			</div>
		);
	}
}


export default Homepage;
