import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ProfileForm from './ProfileForm'


class MyProfile extends Component {

  constructor(props){
    super(props);

    this.state = {
      submitted: false,
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(data) {
    console.log(data)
  }

  render() {
    let user = this.props.currentUser
    let profile = this.props.currentProfile

    if (!this.props.userLoggedIn) {
      return <Redirect to="/registration/login" />
    }
    return (
      <div className="card">
        <h1>{user.username}</h1>
        <ProfileForm user={user} profile={profile} submitForm={this.submitForm}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(MyProfile)
