import React, { Component } from 'react'

import {Link} from 'react-router-dom'

/**
 * Display a victory message
 */
export default class VictoryCard extends Component {

  render() {
    return (
      <div class='victory'>
        <h1>Victory!</h1>
        <img src="/images/svg/party.svg" />
        <h5><Link to='/cards/'>More BingoCards</Link></h5>
        <audio src="/audio/victory.mp3" autoplay="true"></audio>
      </div>
    );
  }
}
