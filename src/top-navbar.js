import React, { Component } from 'react';

import logo from './owl.png';
import './App.css';
import './styles/top-navbar.css';

class TopNavbar extends Component {
  render() {
    return <div className="top-navbar">
              <ul>
                <li><img src={logo} className="App-logo" alt="logo" /></li>
                <li>Athena</li>
                <li>My Lists</li>
                <li>Athena Labs</li>
                <li>Jobs</li>
              </ul>
           </div>
  }
}

export default TopNavbar;
