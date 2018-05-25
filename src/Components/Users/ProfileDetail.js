import React, { Component } from 'react'

import Loader from '../Common/Loader'
import CardList from '../Common/CardList'
import DisplayProfile from './DisplayProfile'
import {apiRoot, apiCall} from '../../Utils/api'

const userURL = apiRoot + 'users/'


export default class ProfileDetail extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.match.params.id,
      profile: {},
      user: {}
    }
  }

  componentWillMount() {
    let url = userURL + this.state.id + '.json'
    let method = 'get'
    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    apiCall(url, method, headers)
    .then(user => {
      // get profile info
      this.setState({user: user})
      apiCall(user.profile, method, headers)
      .then(profile => {
        this.setState({profile: profile})
      })

      // get cards made by user being viewed
      let cards = []
      for (let i = 0; i < user.bingo_cards.length; i++) {
        url = user.bingo_cards[i]
        apiCall(url, method, headers)
        .then(card => {
          cards.push(card)
          this.setState({cards: cards})
        })
      }
    })
  }

  render() {
    let content = <Loader />
    if (this.state.user && this.state.profile) {
      content = [
        <DisplayProfile key={0} user={this.state.user} profile={this.state.profile} />,
      ]
    }

    if (this.state.cards) {
      content.push(<CardList key={1} cards={this.state.cards} />)
    }
    return (
      <div className="card">
        {content}
      </div>
    );
  }
}

