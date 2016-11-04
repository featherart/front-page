import React, { Component } from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';


const MovieSearch = React.createClass({
  displayName: 'MovieSearch',
  propTypes: {
    label: React.PropTypes.string,
  },
  getInitialState () {
    return {
      backspaceRemoves: true,
      multi: false
    };
  },
  onChange (value) {
    console.log('value: ', value);
    this.setState({
      value: value,
    });
  },
  switchToMulti () {
    this.setState({
      multi: true,
      value: [this.state.value],
    });
  },
  switchToSingle () {
    this.setState({
      multi: false,
      value: this.state.value ? this.state.value[0] : null
    });
  },
  getUsers (input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        return { options: json.items };
      });
  },
  gotoUser (value, event) {
    window.open(value.html_url);
  },
  toggleBackspaceRemoves () {
    this.setState({
      backspaceRemoves: !this.state.backspaceRemoves
    });
  },
  toggleCreatable () {
    this.setState({
      creatable: !this.state.creatable
    });
  },
  render () {
    const AsyncComponent = this.state.creatable
      ? Select.AsyncCreatable
      : Select.Async;

    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <AsyncComponent multi={false}
                        value={this.state.value}
                        onChange={this.onChange}
                        onValueClick={this.gotoUser}
                        valueKey="id" labelKey="login"
                        loadOptions={this.getUsers} backspaceRemoves={this.state.backspaceRemoves} />

      </div>
    );
  }
});

export default MovieSearch;
