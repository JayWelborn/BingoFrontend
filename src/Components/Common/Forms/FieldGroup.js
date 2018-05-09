import React, { Component } from 'react'

import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Col,
  Button
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

export class HorizontalGroup extends Component {
  render() {
    let label = this.props.label
    let help = this.props.help
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          {label}
        </Col>
        <Col sm={10}>
          <FormControl {...this.props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </Col>
      </FormGroup>
    )
  }
}

export class HorizontalButton extends Component {
  render() {
    return (
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button bsStyle="primary" type="submit">{this.props.value}</Button>
        </Col>
      </FormGroup>
    )
  }
}
