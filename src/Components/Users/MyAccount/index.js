import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import {Col, Button} from 'react-bootstrap'

import MyAccountForm from './MyAccountForm'
import Warning from '../../Common/Warning'

import {updateUser} from '../../../Redux/actions'
import {apiCall} from '../../../Utils/api'


class MyAccount extends Component {

  constructor(props){
    super(props)

    this.state = {
      submitted: false,
      formvalid: undefined
    }
    this.submitForm = this.submitForm.bind(this)
    this.updateUser = this.props.updateUser.bind(this)
  }

  submitForm(data) {
    let url = this.props.user.url
    let method = 'patch'
    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this.props.token
    })
    let body = JSON.stringify({
      username: data.username,
      email: data.email
    })

    apiCall(url, method, headers, body)
    .then(user => {
      this.updateUser(user)
      this.setState({submitted: true, formvalid: true})
    })
    .catch(error => {
      this.setState({submitted: true, formvalid: false, error: error})
      console.log(error)
    })
  }

  render() {
    let user = this.props.user
    let warning = ''

    if (this.state.submitted) {
      this.state.formvalid ?
      warning = <Warning cat='success' message='Account Updated' />
      :
      warning = <Warning cat='danger' message={'Form Invalid' + this.state.error} />
    }

    if (!this.props.userLoggedIn) {
      return <Redirect to="/registration/login" />
    }
    return (
      <div className="card">
        {warning}
        <Col smOffset={2} sm={10}>
          <h1>My Account</h1>
        </Col>
        <MyAccountForm user={user} submitForm={this.submitForm} />
        <Col smOffset={2}>
          <Link to="/users/myaccount/changepassword" style={{paddingLeft: "5px"}}>
            <Button bsStyle="primary">
              Change Password
            </Button>
          </Link>
        </Col>
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
