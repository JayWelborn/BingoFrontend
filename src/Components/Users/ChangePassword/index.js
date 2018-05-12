import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Col} from 'react-bootstrap'

import ChangePasswordForm from './ChangePasswordForm'
import Warning from '../../Common/Warning'

import {updateUser} from '../../../Redux/actions'
import {apiRoot, apiCall} from '../../../Utils/api'

class ChangePassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false,
      formvalid: undefined,
      statusmessage: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.updateUser = this.props.updateUser.bind(this)
  }

  submitForm(data) {
    let url = apiRoot + 'api-auth/password/change/'
    let method = 'post'
    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this.props.token
    })
    let body = JSON.stringify(data)

    apiCall(url, method, headers, body)
    .then(success => {
      this.setState({
        submitted: true,
        formvalid: true,
        statusmessage: 'Password Update Successful'
      })
    })
    .catch(error => {
      this.setState({
        submitted: true,
        formvalid: false,
        statusmessage: 'Password Update Failed'
      })
    })
  }

  render() {
    let user = this.props.user
    let warning = false
    let formBody = (
      <div>
        <Col smOffset={2} sm={10}>
          <h1>Change Password</h1>
        </Col>
        <ChangePasswordForm user={user} submitForm={this.submitForm} />
      </div>
    )

    if (this.state.submitted) {
      this.state.formvalid ?
      warning = <Warning cat='success' message={this.state.statusmessage} />
      :
      warning = <Warning cat='danger' message={'Form Invalid ' + this.state.statusmessage} />
    }

    if (!this.props.userLoggedIn) {
      return <Redirect to="/registration/login" />
    }
    return (
      <div className="card">
        {warning ? warning : formBody}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLoggedIn: state.userLoggedIn,
    user: state.currentUser,
    token: state.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
