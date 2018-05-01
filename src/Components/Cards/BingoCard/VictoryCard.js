import React, { Component } from 'react';

import {Link} from 'react-router-dom';

/**
 * Display a victory message
 */
export default class VictoryCard extends Component {

  render() {
    return (
      <div>
        <h1>Victory!</h1>
        <Link to='/cards/'>More BingoCards</Link>
      </div>
    );
  }
}
