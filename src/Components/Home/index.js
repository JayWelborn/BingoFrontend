import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

import CardList from '../Common/CardList'

import {apiCall, apiRoot} from '../../Utils/api.js';


/**
 * Home page displayed a list of cards
 */
export default class Home extends Component {

  /**
   * Class constructor. Sets empty userData param in object's state
   * to display loading message.
   *
   * @param  {object} props initial properties
   */
  constructor(props){
    super(props);

    this.state = {
      userData: {},
    };
  }

  /**
   * Fetch card list from API when component successfully mounts
   */
  componentWillMount() {
    let url = apiRoot + 'cards.json';
    let method = 'get';

    apiCall(url, method).then(cardData => {
      // Sort cards by id, newest first
      let cards = cardData.results.sort(function(a, b) {return b.id - a.id});
      this.setState({cardList: cards});
    });
  }


  render() {
    let cards = this.state.cardList

    return (
      <div className="home">
        <div className="card jumbotron">
          <h1>Welcome to <img src={"/images/logo/logo-200px.png"} alt="BINGO"/></h1>
          <p>
            Have you ever been stuck in a boring class with nothing to do? Are you looking for a fun party game?
            Look no further! Thanks to a guy with too much dedication you can make your own bingo cards right here.
          </p>
          <Button bsStyle="primary" bsSize="large">
            Register
          </Button>
          <Button bsStyle="primary" bsSize="large">
            Log In
          </Button>
        </div>
        <CardList cards={cards} />
      </div>
    );
  }
}
