import React, { Component } from 'react'

import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap'


export default class FieldGroup extends Component {

  render() {
    let label = this.props.label
    let help = this.props.help
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...this.props}/>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }
}

export class PasswordGroup extends Component {
  render() {
    let help = this.props.help
    let props = {...this.props}
    delete props.validate

    return (
      <FormGroup validationState = {this.props.validate()}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...props}/>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }
}
