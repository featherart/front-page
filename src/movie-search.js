import React, { Component } from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {movie: ""};
  }
  onChange(value) {
    this.setState({ movie: value });
  }
  // TODO put in a container component
  getUsers(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        return { options: json.items };
      });
  }
  // TODO put hook to load page that comes after movie search here
  gotoUser(value, event) {
    window.open(value.html_url);
  }

  render () {
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select.Async multi={false}
                      value={this.state.movie}
                      onChange={this.onChange.bind(this)}
                      onValueClick={this.gotoUser}
                      valueKey="id" labelKey="login"
                      loadOptions={this.getUsers} backspaceRemoves={true} />

      </div>
    );
  }
}

export default MovieSearch;
