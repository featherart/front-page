import React, { Component } from 'react';
import MovieSearch from './movie-search';
//import TopNavbar from './top-navbar';
import { Link } from 'react-router';
import logo from './owl.png';
import './styles/top-navbar.css';

import 'react-select/dist/react-select.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="top-navbar">
            <ul role="nav">
              <li><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></li>
              <li><Link to="/">Minerva</Link></li>
              <li><Link to="/lists">My Lists</Link></li>
              <li><Link to="/labs">Athena Labs</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
            </ul>
          </div>
        <div className="search-bar">
          <MovieSearch />
        </div>
      </div>
    );
  }
}

export default App;
