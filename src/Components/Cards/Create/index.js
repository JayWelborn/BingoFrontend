import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import CardForm from './CardForm'

import {apiRoot, apiCall} from '../../../Utils/api.js'

const createURL = apiRoot + 'cards/'
const createMethod = 'post'

class CreateContainer extends Component {

  constructor(props){
      super(props);

      this.state = {
        submitted: false
      }
      this.submitForm = this.submitForm.bind(this)
  }

  submitForm(data) {
    let headers = new Headers({
      'Authorization': 'Token ' + this.props.token,
      'Content-Type': 'application/json'
    })
    let body = JSON.stringify(data)
    apiCall(createURL, createMethod, headers, body)
    .then(responseData => {
      this.setState({
        submitted: true,
        cardId: responseData.id
      })
    })
  }

  render() {
    return (
      <div className="card">
        <h1>Create Card</h1>
        {
          this.state.submitted ?
          <Redirect to={'/cards/' + this.state.cardId} />
          :
          <CardForm submitForm={this.submitForm}/>
        }
        <Link to="/cards">Cards Home</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    token: state.token,
  }
}

export default connect(mapStateToProps)(CreateContainer)
