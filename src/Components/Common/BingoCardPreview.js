import React, { Component } from 'react'
import {connect}            from 'react-redux'

import Loader from './Loader'

import {apiCall} from '../../Utils/api'


/**
 * Make container's props equal to app's state
 *
 * @param  {object} state application state
 * @return {object}       unaltered state
 */
function mapStateToProps(state) {
  return {
    user: state.currentUser,
    userLoggedIn: state.userLoggedIn,
    token: state.token,
  }
}

/**
 * Displays a preview of Bingo Card
 */
class BingoCardPreview extends Component {

  // Initialize with empty creator, to be filled by API call
  constructor(props){
    super(props);

    let headers = {}

    if (this.props.userLoggedIn) {
      headers['Authorization'] = 'Token ' + this.props.token
    }

    this.state = {
      creator: {},
      headers: headers,
    };
  }

  /**
   * Make API call before component mounts
   */
  componentWillMount() {
    let creatorURL = this.props.card.creator
    let method = 'get'
    let headers = this.state.headers

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
    let headers = this.state.headers

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
    let user = this.props.user
    return (
      <div className={
        user && creator.id === user.id
        ? "card-preview card-inverted"
        : "card-preview card"
        }>
        {
          profile && creator
          ?
          <span>
          <img src={profile.picture ? profile.picture : '/images/sillhouette.png'} alt={creator.username}/>
            <h5><a href={"/cards/" + card.id}>{card.title}</a></h5>
            created by:&nbsp;
            <a href={"/users/" + creator.id}>{creator.username}</a>
          </span>
          :
          <Loader />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(BingoCardPreview)
