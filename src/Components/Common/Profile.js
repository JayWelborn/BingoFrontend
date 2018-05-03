import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    let profile = this.props.profile
    let user = this.props.user

    return (
      <aside className='profile-sidebar'>
       <img src={profile.picture} alt={user.username}/>
       <ul>
         <li>
           <a href={"/profiles/" + user.id}>
            <h6>{user.username}</h6>
           </a>
         </li>
         <li>
           <a href="/cards/mine">My Cards</a>
         </li>
         <li>
           <a href="/cards/new">
            New Card
           </a>
         </li>
         <li>
           <a href="">
            My Account
           </a>
         </li>
         <li>
           <a href="">
            Edit Profile
           </a>
         </li>
       </ul>
      </aside>
    );
  }
}
