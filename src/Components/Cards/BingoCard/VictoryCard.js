import React, { Component } from 'react'

import {Link} from 'react-router-dom'

/**
 * Display a victory message
 */
export default class VictoryCard extends Component {

  render() {
    return (
      <div className='victory'>
        <h1>Victory!</h1>
        <img src="/images/svg/party.svg" alt="victory"/>
        <h5><Link to='/cards/'>More BingoCards</Link></h5>
        <audio src="/audio/victory.mp3" autoPlay="true"></audio>
      </div>
    );
  }
}
