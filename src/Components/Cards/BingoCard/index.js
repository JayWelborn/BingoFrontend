import React, { Component } from 'react';

import Square from './Square';
import VictoryCard from './VictoryCard';


let BOARD_SIZE = 5;

/**
 * Game component for making BingoCards interactive
 */
export default class BingoCard extends Component {

  /**
   * Class constructor randomizes order of bingo cards
   *
   * @param  {object} props initial properties
   */
  constructor(props){
    super(props);
    let card = this.props.card;
    let squares = [];
    let count = 0;
    shuffle(this.props.squares);

    // board rows
    for (let i = 0; i < BOARD_SIZE; i++){
      squares[i] = [];
      // board columns
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (i === 2 && j === 2) { // place free space in the middle
          squares[i][j] = {text: card.free_space,
                           clicked: false}
        } else {
          squares[i][j] = {text: this.props.squares[count].text,
                           clicked: false}
          count ++;
        }
      }
    }

    this.state = {
        squares: squares,
        victory: false,
    }
  }

  /**
   * Updates state of square in array and checks ot see if game has
   * been won
   *
   * @param  {int} i row in array
   * @param  {int} j column in array
   */
  handleClick(i, j) {
    let squares = this.state.squares;
    squares[i][j].clicked = !squares[i][j].clicked;
    this.setState({squares: squares})
    if (checkVictory(squares)) {
      this.setState({victory: true});
    } else {
      this.setState({victory: false});
    }
  }

  /**
   * Maps state.squares to HTML table for display. Display a victory card
   * if the game has been won.
   */
  render() {
    let card = this.props.card;
    // unpack squares array, and created table rows of Squares
    let board = this.state.squares.map((row, i) => {
      return (<tr key={i}>{row.map((square, j) => {
        return <Square data={square.text} key={3 * i + j} clicked={square.clicked}
                       onClick={() => this.handleClick(i, j)}/>
      })}</tr>)
    });

    let victoryCard = this.state.victory ? <VictoryCard/> : ''

    return (
      <div className="card">
        <table className="bingo-card">
          <thead><tr>
            <th colSpan="5"><h1>{card.title}</h1></th>
          </tr></thead>
          <tbody>
            {board}
          </tbody>
        </table>
        {victoryCard}
      </div>
    );
  }
}

/**
 * Checks to see if current board state represents a "win"
 *
 * @param  {object[][]} squares 2d array of squares
 * @return {boolean}            status of victory
 */
function checkVictory(squares) {

  // initialize diagonal
  let diagonalOne = true;
  let diagonalTwo = true;
  let horizontal, vertical;

  for (let i = 0; i < squares.length; i++) {
    horizontal = true;
    vertical = true;

    // go through a horizontal and vertical row
    for (let j = 0; j < squares.length; j++) {
      // check next square horizontally
      if (!squares[i][j].clicked) {
        horizontal = false;
      }

      // check next square vertically
      if (!squares[j][i].clicked) {
        vertical = false;
      }
    }

    // go ahead and return if horizontal or vertical stayed true
    if (horizontal || vertical) {
      return true;
    }

    // check both diagonals
    if (!squares[i][i].clicked) {
      diagonalOne = false;
    }
    if (!squares[i][squares.length - i - 1].clicked) {
      diagonalTwo = false;
    }
  }

  // if any victory status is true now, they've won
  return (diagonalOne || diagonalTwo || horizontal || vertical);
}

/**
 * Shuffle a given array in place
 *
 * @param  {array} array
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
