import React, { Component } from 'react';

import SearchFilter from '../Common/SearchFilter'
import CardList from '../Common/CardList'

import {apiCall, apiRoot} from '../../Utils/api'

/**
 * Display a searchable list of bingo cards
 */
export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * Make api call before component mounts
   */
  componentWillMount() {
    let url = apiRoot + 'cards.json'
    let method = 'get'
    let headers = {}

    apiCall(url, method, headers)
    .then(cardData => {
      // Sort cards by id, newest first
      let cards = cardData.results.sort(function(a, b) {return b.id - a.id})
      this.setState({cardList: cards})
    });
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
          <h1>Bingo Cards</h1>
          <SearchFilter onTextChange={text => this.setState({filterString: text})} />
        </div>
        <CardList cards={cards} />
      </div>
    );
  }
}
