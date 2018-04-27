import React, { Component } from 'react';

import BingoCard from './BingoCard/'

let apiRoot = '';
if (window.location.href.includes('localhost')) {
  apiRoot = 'http://localhost:8000/api/';
}

export default class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    fetch(apiRoot +
         'cards/' +
         this.props.match.params.id +
         '.json', {
      method: 'get',
      headers: {},
      mode: 'cors',
    }).then(response => response.json())
    .then(card => {
      this.setState({card: card, squares: card.squares});
    });
  }

  render() {
    return (
      <div>
        {
          this.state.card ?
          <BingoCard card={this.state.card} squares={this.state.squares}/>
          :
          <h3>Loading...</h3>
        }
      </div>
    );
  }
}
