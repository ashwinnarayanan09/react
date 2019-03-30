import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li ><Link to={'/'} className="nav-link" > Home </Link></li>
        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
        
      </ul>
      </nav>
    );
  }
}

export default Menu;
