import React, { Component } from 'react';
import MovieSearch from './movie-search';
import TopNavbar from './top-navbar';

import 'react-select/dist/react-select.css';
import './App.css';

class App extends Component {

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        <div className="search-bar">
          <MovieSearch />
        </div>
      </div>
    );
  }
}

export default App;
