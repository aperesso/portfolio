import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Homepage from './components/homepage/homepage';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Homepage}/>
				</div>
			</Router>
		);
	}
}

export default App;
