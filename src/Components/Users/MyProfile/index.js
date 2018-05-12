import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Col} from 'react-bootstrap'

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
      body.append(key, data[key])
    }
    apiCall(url, method, headers, body)
    .then(response => {
      this.updateProfile(response)
      this.setState({submitted: true})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    let profile = this.props.currentProfile

    if (!this.props.userLoggedIn) {
      return <Redirect to="/registration/login" />
    }
    return (
      <div className="card">
        {this.state.submitted && <Warning cat='success' message='Profile Updated' />}
        <Col smOffset={2} sm={10}>
          <h1>My Profile</h1>
        </Col>
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
