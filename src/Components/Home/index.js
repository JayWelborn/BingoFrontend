import React, { Component } from 'react';
import BingoCardPreview from '../Common/BingoCardPreview'
import {Button} from 'react-bootstrap'

import {apiCall, apiRoot} from '../../Utils/api.js';


export default class Home extends Component {

  // Initilize state with empty card list and no user data
  constructor(props){
    super(props);

    this.state = {
      userData: {},
    };
  }

  // Fetch card list from API when component successfully mounts
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
        {
          cards ?
          <div className="card-list">
            {// Map cards to a Card component containing that card's data
              cards.map((card, i) =>
                <BingoCardPreview
                  card={card} index={i} key={i}
                />
              ) // End map
            }
          </div>
          :
          <h3>Loading...</h3>
        }
      </div>
    );
  }
}
