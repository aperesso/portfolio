import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import L_insane from './components/projects/l-insane';
import Dollhouse from './components/projects/dollhouse';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Homepage}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/l-insane" component={L_insane}/>
					<Route exact path="/dollhouse" component={Dollhouse}/>
				</div>
			</Router>
		);
	}
}

export default App;
