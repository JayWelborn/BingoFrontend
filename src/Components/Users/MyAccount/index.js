import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Col} from 'react-bootstrap'

import MyAccountForm from './MyAccountForm'
import Warning from '../../Common/Warning'

import {updateUser} from '../../../Redux/actions'
import {apiCall} from '../../../Utils/api'


class MyAccount extends Component {

  constructor(props){
    super(props)

    this.state = {
      submitted: false,
    }
    this.submitForm = this.submitForm.bind(this)
    this.updateUser = this.props.updateUser.bind(this)
  }

  submitForm(data) {
    let url = this.props.user.url
    let headers = new Headers({
      'Content-Type': 'applicatoin/json',
      Authorization: 'Token ' + this.props.token
    })
    let body = JSON.stringify({
      username: data.username,
      email: data.email
    })

    console.log(data)
  }

  render() {
    let user = this.props.user

    if (!this.props.userLoggedIn) {
      return <Redirect to="/registration/login" />
    }
    return (
      <div className="card">
        <Col smOffset={2} sm={10}>
          <h1>My Account</h1>
        </Col>
        <MyAccountForm user={user} submitForm={this.submitForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    userLoggedIn: state.userLoggedIn,
    token: state.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
