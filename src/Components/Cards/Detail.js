import React, { Component } from 'react';

import BingoCard from './BingoCard/';

import {apiCall} from '../../Utils/api.js';

export default class Detail extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    apiCall('cards/' + this.props.match.params.id + '.json',
            'get', {})
    .then(card => {
      this.setState({card: card, squares: card.squares})
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
