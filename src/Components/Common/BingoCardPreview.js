import React, { Component } from 'react';

import {apiCall} from '../../Utils/api.js';


function everyThird(number) {
  return number % 7
}

/**
 * Displays a preview of Bingo Card
 */
export default class BingoCardPreview extends Component {

  // Initialize with empty creator, to be filled by API call
  constructor(props){
    super(props);

    this.state = {
      creator: {}
    };
  }

  /**
   * Make API call before component mounts
   */
  componentWillMount() {
    let creatorURL = this.props.card.creator
    let method = 'get'
    let headers = {}

    // fetch card's creator
    apiCall(creatorURL, method, headers)
    .then(creator => {
      // set creator to current state
      this.setState({creator: creator})
      apiCall(creator.profile, method, headers)
      .then(profile => {
        this.setState({profile: profile})
      })
    }) // End fetch
  } // End componentDidMount

  /**
   * Update cards info when the list containing said cards is filtered
   *
   * @param  {object} nextProps new card's props
   */
  componentWillReceiveProps(nextProps) {
    let creatorURL = nextProps.card.creator
    let method = 'get';
    let headers = {};

    // fetch card's creator
    apiCall(creatorURL, method, headers)
    .then(creator => {
      // set creator to current state
      this.setState({creator: creator})
      apiCall(creator.profile, method, headers)
      .then(profile => {
        this.setState({profile: profile})
      })
    }) // End fetch
  }

  render() {
    let card = this.props.card
    let creator = this.state.creator
    let profile = this.state.profile
    return (
      <div className={
        everyThird(this.props.index)
        ? "card-preview card"
        : "card-preview card-inverted"
        }>
        {
          profile && creator
          ?
          <span>
          <img src={profile.picture} alt={creator.username}/>
            <h5><a href={"/cards/" + card.id}>{card.title}</a></h5>
            created by:&nbsp;
            <a href={"/profiles/" + creator.id}>{creator.username}</a>
          </span>
          :
          <span>loading...</span>
        }
      </div>
    );
  }
}
