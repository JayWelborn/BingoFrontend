import React, { Component } from 'react';

import {Button} from 'react-bootstrap';

import {login} from '../../Utils/login'

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

    // this prop is a function to execute Redux's logUserIn function
    this.logUserIn = this.props.logUserIn.bind(this);
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
    event.preventDefault()
    login(this.state.username, this.state.password, this.logUserIn)
  }

  /**
   * Render LogIn form
   * @return {HTML form} log in form
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder={this.state.username}
               onChange={this.handleChange}  name="username"/>
        <input type="password" onChange={this.handleChange} name="password"/>
        <Button onClick={this.handleSubmit} type="submit" value="Submit">
          Log In
        </Button>
      </form>
    );
  }
}
