import React, { Component } from 'react'
import {connect} from 'react-redux'

import Warning from '../../Common/Warning'
import ContactForm from './ContactForm'

import {apiCall, apiRoot} from '../../../Utils/api'

const contactURL = apiRoot + 'contact/'

/**
 * Contact Form
 */
class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      submitted: false
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(data) {
    let url = contactURL
    let method = 'post'
    let headers = {}
    if (this.props.token) {
      headers['Authorization'] = 'Token ' + this.props.token
    }
    let body = new FormData()
    for (var key in data) {
      body.append(key, data[key])
      console.log(body)
    }
  }

  render() {
    return (
      <div className="card">
        <h1>Contact</h1>
        {
          this.state.submitted ?
          <Warning cat='success' message='Email Sent' />
          :
          ''
        }
        <ContactForm submitForm={this.submitForm} user={this.props.user} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    token: state.token
  }
}

export default connect(mapStateToProps)(Contact)
