import React, { Component } from 'react';


function everyThird(number) {
  return number % 7
}

export default class BingoCardPreview extends Component {

  // Initialize with empty creator, to be filled by API call
  constructor(props){
    super(props);

    this.state = {
      creator: {}
    };
  }


  componentWillMount() {
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
      fetch(creator.profile, {
        method: 'get',
        headers: {},
        mode: 'cors'
      }).then(response => response.json())
      .then(profile => {
        this.setState({profile: profile})
      })
    }) // End fetch
  } // End componentDidMount

  componentWillReceiveProps(nextProps) {
    let creatorURL = nextProps.card.creator

    // fetch card's creator
    fetch(creatorURL, {
      method: 'get',
      headers: {},
      mode: 'cors'
    }).then(response => response.json())
    .then(creator => {
      // set creator to current state
      this.setState({creator: creator})
      fetch(creator.profile, {
        method: 'get',
        headers: {},
        mode: 'cors'
      }).then(response => response.json())
      .then(profile => {
        this.setState({profile: profile})
      })
    }) // End fetch
  }

  render() {
    let card = this.props.card
    let creator = this.state.creator
    let profile = this.state.profile
    return (
      <div className={
        everyThird(this.props.index)
        ? "card-preview card"
        : "card-preview card-inverted"
        }>
        {
          profile && creator
          ?
          <span>
          <img src={profile.picture} alt={creator.username}/>
            <h5><a href={"/cards/" + card.id}>{card.title}</a></h5>
            created by:&nbsp;
            <a href={"/profiles/" + creator.id}>{creator.username}</a>
          </span>
          :
          <span>loading...</span>
        }
      </div>
    );
  }
}
