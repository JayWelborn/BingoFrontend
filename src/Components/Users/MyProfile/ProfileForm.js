import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

import {HorizontalGroup, HorizontalButton} from '../../Common/Forms/FieldGroup'


export default class ProfileForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      about_me: this.props.profile.about_me,
      website: this.props.profile.website
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      <Form horizontal id="profile-update" onSubmit={this.handleSubmit}>
        <HorizontalGroup
          id="about" componentClass="textarea" label="About Me" rows={4} style={{resize: 'none'}}
          defaultValue={this.state.about_me}  onChange={this.handleChange}/>
        <HorizontalGroup
          id="picture" type="file" label="Profile Picture"
          help="Leave blank to keep your current profile picture"
          onChange={this.handleChange} />
        <HorizontalGroup
          id="website" type="text" label="Website"
          defaultValue={this.state.website} onChange={this.handleChange} />
        <HorizontalButton value="Update Profile" />
      </Form>
    );
  }
}
