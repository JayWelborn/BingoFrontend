import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

import {HorizontalGroup, HorizontalButton} from '../../Common/Forms/FieldGroup'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)

    if (this.props.user) {
      this.state = {
        name: this.props.user.username,
        email: this.props.user.email
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
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
      <Form horizontal id="contact" onSubmit={this.handleSubmit}>
        <HorizontalGroup
          id="name" type="text" label="Name"
          defaultValue={this.props.user.username} onChange={this.handleChange} />
        <HorizontalGroup
          id="email" type="email" label="Email Address"
          defaultValue={this.props.user.email} onChange={this.handleChange} />
        <HorizontalGroup
          id="subject" type="text" label="Subject"
          onChange={this.handleChange} />
        <HorizontalGroup
          id="body" componentClass="textarea" label="Message" rows={4} style={{resize: 'none'}}
          onChange={this.handleChange}/>
        <HorizontalButton value="Contact" />
      </Form>
    );
  }
}
