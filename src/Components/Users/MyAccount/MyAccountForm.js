import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

import {HorizontalGroup, HorizontalButton} from '../../Common/Forms/FieldGroup'


export default class MyAccountForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let state = {}
    state[event.target.id] = event.target.value
    this.setState(state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitForm(this.state)
  }

  render() {
    return (
      <Form horizontal id="account-update" onSubmit={this.handleSubmit}>
        <HorizontalGroup
          id="username" type="text" label="Username"
          defaultValue={this.state.username} onChange={this.handleChange} />
        <HorizontalGroup
          id="email" type="email" label="Email"
          defaultValue={this.state.email}  onChange={this.handleChange}/>
        <HorizontalButton value="Update Account Info" />
      </Form>
    );
  }
}
