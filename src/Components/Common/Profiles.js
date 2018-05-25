import React, { Component } from 'react';

import Loader from './Loader'
import ProfilePreview from './ProfilePreview'

export default class Profiles extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    let users = this.props.users
    return (
      <div>
        {
          users ?
          <div className="card-list">
            {
              users.map((user, i) =>
                <ProfilePreview user={user} index={i} key={i} />)
            }
          </div>
          :
          <Loader />
        }
      </div>
    );
  }
}
