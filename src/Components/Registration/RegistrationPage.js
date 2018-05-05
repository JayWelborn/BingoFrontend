import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {validatePasswords} from '../../Utils/validatePasswords'
import {validateRegistrationData, listWarnings, register} from '../../Utils/register'
import {logUserIn} from '../../Redux/actions'

import FieldGroup, {PasswordGroup} from '../Common/Forms/FieldGroup'
import Warning from '../Common/Warning'


class RegistrationPage extends Component {

  constructor(props){
      super(props);

      this.handleChange = this.handleChange.bind(this)
      this.getValidationState = this.getValidationState.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.logUserIn = this.props.logUserIn.bind(this)

      this.state = {password1: '', password2: ''}
  }

  handleChange(event) {
    event.preventDefault()
    let state = {}
    state[event.target.id] = event.target.value
    this.setState(state)
  }

  handleSubmit(event) {
    event.preventDefault()
    let data = {
      username: this.state.username,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2
    }
    if (validateRegistrationData(data)) {
      register(data, this.logUserIn)
    } else {
      let warnings = listWarnings(data)
      this.setState({registrationFailed: true, warnings: warnings})
    }
  }

  getValidationState() {
    return validatePasswords(this.state.password1, this.state.password2)
  }

  render() {
    if (this.state.registrationFailed) {
      var alerts = []
      let i = 0
      for (var property in this.state.warnings) {
        alerts.push(<Warning cat="warning" message={this.state.warnings[property]} key={i}/>)
        i++
      }
    }
    if (this.props.userLoggedIn) {
      return(<Redirect to="/" />)
    } else {
      return (
        <div className="card">
          <h1>Register</h1>
          {alerts}
          <form id="registration-form" onSubmit={this.handleSubmit}>
            <FieldGroup
              id="username" type="text" label="Username"
              placeholder="Username" onChange={this.handleChange} />
            <FieldGroup
              id="email" type="email" label="Email"
              placeholder="Email Address" onChange={this.handleChange} />
            <PasswordGroup
              validate={this.getValidationState} id="password1"
              label="Password" type="password" onChange={this.handleChange} />
            <PasswordGroup
              validate={this.getValidationState} id="password2"
              label="Repeat Password" type="password" onChange={this.handleChange} />
            <Button bsStyle="primary" type="submit">Register</Button>
          </form>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    logUserIn: (username, password, token) => {
      dispatch(logUserIn(username, password, token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)