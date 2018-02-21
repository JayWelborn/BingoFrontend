import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import List from './List';
import Detail from './Detail';
import Create from './Create';


export default class Cards extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/cards" component={List} />
        <Route path="/cards/:id" component={Detail} />
        <Route path="/cards/create" component={Create} />
      </Switch>
    );
  }
}
