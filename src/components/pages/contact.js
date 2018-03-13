import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';


import './../../stylesheets/css/pages/contact.min.css'

import sketch from './../designed_components/sketch'
import Menu from './../designed_components/menu'
import mail from './../../assets/mail.svg'

class Contact extends Component {

	render() {
	return (
		<div className="Contact">
			<div className="left _contact" id="left">
				<P5Wrapper className="sketch" sketch={sketch} />
				<div className="hometext">
					<h3> Contact Me </h3>
					<h4> I am so glad to hear from you </h4>
				</div>
				<a href="mailto:aperesso@student.42.fr">
					<img alt="Mail" src={mail} className="mail"/>
				</a>
			</div>
			<Menu/>
		</div>
	);
	}
}

export default Contact;
