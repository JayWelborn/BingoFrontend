import React, { Component } from 'react';

import {Alert, Button} from 'react-bootstrap'


export default class RegistrationWarning extends Component {

  constructor(props){
      super(props);

      this.handleDismiss = this.handleDismiss.bind(this)
      this.handleShow = this.handleShow.bind(this)

      this.state = {
        show: true
      }
  }

  handleDismiss() {
    this.setState({show: false})
  }

  handleShow() {
    this.setState({show: true})
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="warning">
          <h6>Uh-Oh</h6>
          <p>
            <strong>Username</strong> and <strong>Email</strong> are
            required. <strong>Password</strong> must have at least 8
            characters.
          </p>
          <br/>
          <Button bsStyle="warning" onClick={this.handleDismiss}>Dismiss</Button>
        </Alert>
      )
    }
  }
}
