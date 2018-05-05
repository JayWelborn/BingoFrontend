import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {logUserIn} from '../../Redux/actions'
import {login} from '../../Utils/login'

import FieldGroup from '../Common/Forms/FieldGroup'


class LogInPage extends Component {

  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    let state = {}
    state[event.target.id] = event.target.value
    this.setState(state)
  }

  handleSubmit(event) {
    event.preventDefault()
    login(this.state.username, this.state.password, this.props.logUserIn)
  }

  render() {
    if (this.props.userLoggedIn) {
      return (<Redirect to="/" />)
    } else {
      return (
        <div className="card">
          <h1>Login</h1>
          <form id="login-form" onSubmit={this.handleSubmit}>
            <FieldGroup
              id="username" type="text" label="Username"
              placeholder="Username" onChange={this.handleChange} />
            <FieldGroup
              id="password" type="password" label="Password"
              onChange={this.handleChange} />
            <Button bsStyle="primary" type="submit">Log In</Button>
          </form>
        </div>
      )
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage)
