import React, { Component } from 'react'
import {Col, Form} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {logUserIn} from '../../Redux/actions'
import {login} from '../../Utils/login'

import {HorizontalGroup, HorizontalButton} from '../Common/Forms/FieldGroup'


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
    try {
      login(this.state.username, this.state.password, this.props.logUserIn)
    } catch(error) {
      this.setState({loginFailed: true})
    }
  }

  render() {
    if (this.props.userLoggedIn) {
      return (<Redirect to="/" />)
    } else {
      return (
        <div className="card">
          <Col smOffset={2} sm={10}>
            <h1>Login</h1>
          </Col>
          <Form horizontal id="login-form" onSubmit={this.handleSubmit}>
            <HorizontalGroup
              id="username" type="text" label="Username"
              placeholder="Username" onChange={this.handleChange} />
            <HorizontalGroup
              id="password" type="password" label="Password"
              onChange={this.handleChange} />
            <HorizontalButton value="Log In" />
          </Form>
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
