import React, { Component } from 'react';


export default class DisplayProfile extends Component {

  render() {
    let user = this.props.user
    let profile = this.props.profile
    return (
      <div className="display-profile">
        <img src={profile.picture ? profile.picture : '/images/sillhouette.png'} alt={user.username}/>
        <section>
          <h1>{user.username}</h1>
          {
            profile.about_me ?
            <p>{profile.about_me}</p> : <p>No About Me yet</p>
          }
          {
            profile.website ?
            <p><a href={profile.website}>
              {user.username}&rsquo;s website
            </a></p>
            : <p>{user.username} doesn't have a website to share</p>
          }
        </section>
      </div>
    );
  }
}
