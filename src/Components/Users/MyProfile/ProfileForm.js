import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

import FieldGroup from '../../Common/Forms/FieldGroup'


export default class ProfileForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      about_me: this.props.profile.about_me,
      picture: this.props.profile.picture,
      website: this.props.profile.website
    }
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
    let data = this.state
    console.log(data)
  }

  render() {
    let user = this.props.user
    let profile = this.props.profile
    return (
      <form id="profile-update" onSubmit={this.props.submitForm}>
        <FieldGroup
          id="about" type="textarea" label="About Me"
          placeholder={this.state.about_me}  onChange={this.handleChange}/>
      </form>
    );
  }
}
