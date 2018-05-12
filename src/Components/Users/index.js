import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import ChangePassword from './ChangePassword/'
import MyAccount from './MyAccount/'
import MyProfile from './MyProfile/'
import ProfileList from './ProfileList'
import ProfileDetail from './ProfileDetail'

export default class Users extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/users" component={ProfileList} />
        <Route exact path="/users/myaccount" component={MyAccount} />
        <Route exact path="/users/myaccount/changepassword" component = {ChangePassword} />
        <Route exact path="/users/myprofile" component={MyProfile} />
        <Route path="/users/:id" component={ProfileDetail} />
      </Switch>
    );
  }
}
