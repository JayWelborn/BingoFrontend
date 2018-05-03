import React, { Component } from 'react';

import BingoCard from './BingoCard';
import Loader from '../Common/Loader'

import {apiCall, apiRoot} from '../../Utils/api.js';

/**
 * Makes API call for card detail API call, and displays card when ready
 */
export default class Detail extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    let url = apiRoot + 'cards/' + this.props.match.params.id + '.json'
    let method = 'get'
    let headers = {}

    apiCall(url, method, headers)
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
          <Loader />
        }
      </div>
    );
  }
}
