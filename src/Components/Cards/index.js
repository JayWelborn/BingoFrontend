import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import List from './List'
import Detail from './Detail'
import Create from './Create'
import MyCards from './MyCards'


/**
 * Handle url routing within cards section
 */
export default class Cards extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/cards" component={List} />
        <Route path="/cards/create" component={Create} />
        <Route path="/cards/mine" component={MyCards} />
        <Route path="/cards/:id" component={Detail} />
      </Switch>
    );
  }
}
