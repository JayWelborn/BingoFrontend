import React, { Component } from 'react';


function everyThird(number) {
  return number % 5
}

export default class BingoCardPreview extends Component {

  // Initialize with empty creator, to be filled by API call
  constructor(props){
    super(props);

    this.state = {
      creator: {}
    };
  }


  componentDidMount() {
    let creatorURL = this.props.card.creator

    // fetch card's creator
    fetch(creatorURL, {
      method: 'get',
      headers: {},
      mode: 'cors'
    }).then(response => response.json())
    .then(creator => {
      // set creator to current state
      this.setState({creator: creator})
      console.log(creator)
    }) // End fetch
  } // End componentDidMount

  render() {
    let card = this.props.card
    let creator = this.state.creator
    return (
      <div className={
        everyThird(this.props.index)
        ? "card"
        : "card-inverted"
      }>
        <h5><a href={"/cards/" + card.id}>{card.title}</a></h5>
        created by:&nbsp;
        {
          creator ?
          <a href={"/profiles/" + creator.id}>{creator.username}</a>
          :
          <span>loading...</span>
        }
      </div>
    );
  }
}
