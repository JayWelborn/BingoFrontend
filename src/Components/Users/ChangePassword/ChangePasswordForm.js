import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

import {PasswordGroup, HorizontalButton} from '../../Common/Forms/FieldGroup'

import {validatePasswords} from '../../../Utils/validatePasswords'


export default class ChangePasswordForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      oldpassword: '',
      new_password1: '',
      new_password2: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
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

  getValidationState() {
    return validatePasswords(this.state.new_password1, this.state.new_password2)
  }

  render() {
    return (
      <Form horizontal id="change-password" onSubmit={this.handleSubmit}>
        <PasswordGroup
          id="old_password" type="password" label="Old Password"
          validate={() => null} onChange={this.handleChange} />
        <PasswordGroup
          id="new_password1" type="password" label="New Password"
          validate={this.getValidationState} onChange={this.handleChange} />
        <PasswordGroup
          id="new_password2" type="password" label="Repeat New Password"
          validate={this.getValidationState} onChange={this.handleChange} />
        <HorizontalButton value="Change Password" />
      </Form>
    );
  }
}
