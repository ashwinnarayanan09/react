import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

	render() {
	    return (
	    <Router basename='spectac'>
	        <div className="fluid-container">
            <Menu/>
						<Switch>
	              <Route exact path='/' component={Home} />
	              <Route path='/contact' component={Contact} />
	              <Route path='/about' component={About} />
	          </Switch>
	        </div>
	      </Router>
	    );
	  }

}

export default App;
