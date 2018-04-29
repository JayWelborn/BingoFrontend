import React, { Component } from 'react';

import {
  Button
} from 'react-bootstrap';

import {apiCall, apiRoot} from '../../api.js';

const loginURL = apiRoot + 'api-auth/login/';
const userURL = apiRoot + 'api-auth/user/';

/**
 * Class to make a login form. Displays username and password fields, and sends
 * handles sending login API call and storing user's auth token.
 */
export default class LogIn extends Component {

  /**
   * Class constructor
   *
   * @param props class properties
   */
  constructor(props) {
    super(props);
    // initialize state for placeholder text
    this.state = {username: 'username'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Update state as user types.
   *
   * @param  {event} event change event
   */
  handleChange(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   * Attempt to log user into site
   *
   * @param  {event} event submit event
   */
  handleSubmit(event) {
    event.preventDefault();

    let method = 'post';
    let header = new Headers({
      'Content-Type': 'application/json'
    })
    let body = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    })

    apiCall(loginURL, method, header, body)
    .then(loginData => {
      this.setState({token: loginData.key})

      method = 'get'
      header = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + loginData.key,
      })

      apiCall(userURL, method, header, {})
      .then(userData => {
        this.setState({user: userData})
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder={this.state.username}
               onChange={this.handleChange}  name="username"/>
        <input type="password" onChange={this.handleChange} name="password"/>
        <Button onClick={this.handleSubmit} type="submit" value="Submit">
          Submit
        </Button>
      </form>
    );
  }
}
