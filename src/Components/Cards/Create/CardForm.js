import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

import {validateSquares} from '../../../Utils/validateSquares'
import {apiCall, apiRoot} from '../../../Utils/api'


export default class CardForm extends Component {

  constructor(props){
      super(props);

      let squares = []

      for (let i = 0; i < 24; i++) {
        squares[i] = {}
      }

      this.state = {
        title: '',
        free_space: '',
        squares: squares,
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleSquareChange = this.handleSquareChange.bind(this)
      this.submitForm = this.props.submitForm.bind(this)
  }

  handleChange(event) {
    let state = {};
    state[event.target.name] = event.target.value
    console.log(state)
    this.setState(state)
  }

  handleSquareChange(event) {
    let squares = this.state.squares
    let i = parseInt(event.target.name)
    squares[i] = {text: event.target.value}
    this.setState({squares: squares})
  }

  handleSubmit(event) {
    event.preventDefault()
    if(validateSquares(this.state.squares) && this.state.title && this.state.free_space) {
      this.submitForm(this.state)
    } else {
      alert("Invalid Input. Title, Free Space, and all squares are required.")
    }
  }

  render() {
    let squareInputs = []
    for (let i = 0; i < 24; i++) {
      squareInputs.push(
        <input type="text" placeholder="square text" key={i}
               onChange={this.handleSquareChange} name={i}
               className="text-field"/>
        )
    }

    return (
      <form id='card-create' onSubmit={this.handleSubmit}>
        <span>
          <label>Card Title:</label>
          <input type="text" placeholder="Card Title" onChange={this.handleChange}
                 name="title" className="text-field header-field"/>
        </span>
        <span>
          <label>Free Space:</label>
          <input type="text" placeholder="Free Space" onChange={this.handleChange}
                 name="free_space" className="text-field header-field"/>
        </span>
        {squareInputs}
        <Button bsStyle="primary" onClick={this.handleSubmit}
                type="submit" value="Submit">
          Submit
        </Button>
      </form>
    );
  }
}
