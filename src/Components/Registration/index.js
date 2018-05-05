import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import RegistrationPage from './RegistrationPage'
import LogInPage from './LogInPage'

export default class Registration extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/registration/login" component={LogInPage} />
      </Switch>
    );
  }
}
