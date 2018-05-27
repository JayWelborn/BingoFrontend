import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    let profile = this.props.profile
    let user = this.props.user

    return (
      <aside className='profile-sidebar'>
       <img src={profile.picture ? profile.picture : '/images/sillhouette.png'} alt={user.username}/>
       <div>
         <a href={"/users/" + user.id}>
          <h6>{user.username}</h6>
         </a>
         <ul>
           <li>
             <a href="/cards/mine">My Cards</a>
           </li>
           <li>
             <a href="/cards/create">
              New Card
             </a>
           </li>
           <li>
             <a href="/users/myaccount">
              My Account
             </a>
           </li>
           <li>
             <a href="/users/myprofile">
              Edit Profile
             </a>
           </li>
         </ul>
       </div>
      </aside>
    );
  }
}
