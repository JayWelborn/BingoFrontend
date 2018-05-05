import React, { Component } from 'react'

import {Alert, Button} from 'react-bootstrap'


export default class Warning extends Component {

  constructor(props){
    super(props)
    this.handleDismiss = this.handleDismiss.bind(this)

    this.state = {show: true}
  }

  handleDismiss() {
    this.setState({show: false})
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle={this.props.cat}>
          <p>
            {this.props.message}
          </p>
          <Button bsStyle={this.props.cat} bsSize="small" onClick={this.handleDismiss}>
            Dismiss
          </Button>
        </Alert>
      )
    } else {
      return null
    }
  }
}
