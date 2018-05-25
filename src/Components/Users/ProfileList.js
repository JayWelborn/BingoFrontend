import React, { Component } from 'react'

import SearchFilter from '../Common/SearchFilter'
import Profiles from '../Common/Profiles'

import {apiCall, apiRoot} from '../../Utils/api'

export default class ProfileList extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    let url = apiRoot + 'users.json'
    let method = 'get'
    let headers = {}

    apiCall(url, method, headers)
    .then(userData => {
      this.setState({users: userData.results.sort(function(a, b) {return b.id - a.id})})
    })
  }

  render() {
    let users = this.state.filterString ?
    this.state.users.filter(user =>
      user.username.toLowerCase().includes(this.state.filterString.toLowerCase())
    ) : this.state.users
    return (
      <div>
        <div className="card">
          <h1>Bingonauts</h1>
          <SearchFilter onTextChange={text => this.setState({filterString: text})} />
        </div>
        <Profiles users={users} />
      </div>

    );
  }
}
