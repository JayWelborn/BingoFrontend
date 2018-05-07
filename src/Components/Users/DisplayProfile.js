import React, { Component } from 'react';


export default class DisplayProfile extends Component {

  render() {
    let user = this.props.user
    let profile = this.props.profile
    return (
      <div className="display-profile">
        <img src={profile.picture} alt={user.username}/>
        <section>
          <h1>{user.username}</h1>
          {
            profile.about_me ?
            <p>{profile.about_me}</p> : ''
          }
          {
            profile.website ?
            <p><a href={profile.website}>
              {user.username}&rsquo;s website
            </a></p>
            : ''
          }
        </section>
      </div>
    );
  }
}
