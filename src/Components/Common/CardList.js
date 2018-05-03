import React, { Component } from 'react'

import BingoCardPreview from './BingoCardPreview'

export default class CardList extends Component {
  render() {
    let cards = this.props.cards
    return (
      <div>
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
