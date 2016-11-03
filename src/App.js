import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
    var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'three' },
      { value: 'four', label: 'Four' },
      { value: 'five', label: 'Five' },
      { value: 'six', label: 'Six' }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Search Movies</h2>
        </div>
        <div className="search-bar">
          <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={this.logChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
