import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import logo from './owl.png';
import './App.css';

class App extends Component {

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
    var res = {};
    var getOptions = (input) => {

      return axios.get(`http://www.omdbapi.com/?t=${input}`)
        .then((response) => {
          console.log("response: ", response);
          res = [{ value: `${response.data.Title}`, label: `${response.data.Title}`}];
          return res;
        }).then((json) => {
          console.log('json: ', json);
          return { options: res };
        });
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Search Movies</h2>
        </div>
        <div className="search-bar">
        <Select.Async
            name="form-field-name"
            value="one"
            loadOptions={getOptions}
        />
        </div>
      </div>
    );
  }
}

export default App;
