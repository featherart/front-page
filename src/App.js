import React, { Component } from 'react';
import axios from 'axios';
import MovieSearch from './movie-search';

import 'react-select/dist/react-select.css';
import logo from './owl.png';
import './App.css';

class App extends Component {

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Search Movies</h2>
        </div>
        <div className="search-bar">
          <MovieSearch />
        </div>
      </div>
    );
  }
}

export default App;
