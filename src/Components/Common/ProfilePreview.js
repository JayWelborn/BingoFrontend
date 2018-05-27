import React, { Component } from 'react'
import {connect}            from 'react-redux'
import {Link}               from 'react-router-dom'

import Loader from './Loader'

import {apiCall} from '../../Utils/api'

class ProfilePreview extends Component {

  constructor(props) {
    super(props)

    let headers = {}

    if (this.props.userLoggedIn) {
      headers['Authorization'] = 'Token ' + this.props.token
    }

    this.state = {
      profile: {},
      headers: headers,
    }
  }

  componentWillMount() {
    let profileURL = this.props.user.profile
    let method = 'get'
    let headers = this.state.headers

    apiCall(profileURL, method, headers)
    .then(profile => {
      this.setState({profile: profile})
    })
  }

  render() {
    let user = this.props.user
    let currentUser = this.props.currentUser
    let profile = this.state.profile
    return (
      <div className={
        currentUser && currentUser.id === user.id
        ? "card-preview card-inverted"
        : "card-preview card"
        }>
        {
          profile && user
          ?
          <span>
            <img src={profile.picture ? profile.picture : '/images/sillhouette.png'} alt={user.username}/>
            <h5><Link to={"/users/" + user.id}>{user.username}</Link></h5>
          </span>
          :
          <Loader />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userLoggedIn: state.userLoggedIn,
    token: state.token
  }
}

export default connect(mapStateToProps)(ProfilePreview)
