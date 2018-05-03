import React, { Component } from 'react'
import {connect}            from 'react-redux'

import SearchFilter     from '../Common/SearchFilter'
import CardList         from '../Common/CardList'

import {apiCall} from '../../Utils/api.js'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    token: state.token,
    userLoggedIn: state.userLoggedIn
  }
}

/**
 * Display a searchable list of bingo cards created by
 * currently authenticated user
 */
class MyCards extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * Make api call before component mounts
   */
  componentWillMount() {
    let urls = this.props.user.bingo_cards
    let method = 'get'
    let headers = {
      Authorization: 'Token ' + this.props.token
    }
    let cards = []

    for (let i = 0; i < urls.length; i++) {
      apiCall(urls[i], method, headers)
      .then(cardData => {
        cards.push(cardData)
        this.setState({cardList: cards})
      })
    }
    cards = cards.sort(function(a, b) {return b.id - a.id})
    this.setState({cardList: cards})
  }

  /**
   * Display card list
   */
  render() {
    // If there is a filterstring, cards are filtered. Otherwise, the whole list is rendered
    let cards = this.state.filterString
    ? this.state.cardList.filter(card =>
      card.title.toLowerCase().includes(this.state.filterString.toLowerCase())
    )
    : this.state.cardList

    return (
      <div>
        <div className="card" id="card-list-header">
          <h1>My Cards</h1>
          <SearchFilter onTextChange={text => this.setState({filterString: text})} />
        </div>

        <CardList cards={cards} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MyCards)
