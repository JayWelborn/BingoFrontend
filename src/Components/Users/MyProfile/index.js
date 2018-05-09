import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import ProfileForm from './ProfileForm'
import Warning from '../../Common/Warning'

import {apiCall} from '../../../Utils/api'
import {updateProfile} from '../../../Redux/actions'


class MyProfile extends Component {

  constructor(props){
    super(props);

    this.state = {
      submitted: false,
    }
    this.submitForm = this.submitForm.bind(this)
    this.updateProfile = this.props.updateProfile.bind(this)
  }

  submitForm(data) {
    let url = this.props.currentProfile.url
    let method = 'put'
    let headers = {
      Authorization: 'Token ' + this.props.token,
    }
    let body = new FormData()
    for (var key in data) {
      console.log(key)
      console.log(data[key])
      body.append(key, data[key])
    }
    apiCall(url, method, headers, body)
    .then(response => {
      this.updateProfile(response)
      this.setState({submitted: true})
    })
  }

  render() {
    let user = this.props.currentUser
    let profile = this.props.currentProfile

    if (!this.props.userLoggedIn) {
      return <Redirect to="/registration/login" />
    }
    return (
      <div className="card">
        {this.state.submitted && <Warning cat='success' message='Profile Updated' />}
        <h1>{user.username}</h1>
        <ProfileForm profile={profile} submitForm={this.submitForm}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: (profile) => {
      dispatch(updateProfile(profile))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
