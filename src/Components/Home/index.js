import React, { Component } from 'react';
import BingoCardPreview from '../Common/BingoCardPreview'


let apiRoot = '';
if (window.location.href.includes('localhost')) {
  apiRoot = 'http://localhost:8000/api/';
}

export default class Home extends Component {

  // Initilize state with empty card list and no user data
  constructor(props){
    super(props);

    this.state = {
      cardList: [],
      userData: {},
    };
  }

  // Fetch card list from API when component successfully mounts
  componentDidMount() {
    fetch(apiRoot + 'cards.json' , {
      method: 'get',
      headers: {},
      mode: 'cors',
    }).then(response => response.json())
    .then(cardData => {
      // Sort cards by id, newest first
      let cards = cardData.results.sort(function(a, b) {return b.id - a.id})
      this.setState({cardList: cards})
    });
  }


  render() {
    let cards = this.state.cardList.slice(0, 10)
    return (
      <div className="home">
        <h1>Home</h1>
        {
          this.state.cardList ?
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
