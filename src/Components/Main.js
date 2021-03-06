import React, { Component } from 'react'

// router imports
import {
  Switch,
  Route
} from 'react-router-dom'

// import components
import Home from './Home/'
import About from './Home/About'
import Contact from './Home/Contact/'
import Cards from './Cards/'
import Registration from './Registration/'
import Users from './Users'

/**
 * Main body component. Handles routing do subordinate components
 * based on URL.
 */
class Main extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cards" component={Cards} />
          <Route path="/registration" component={Registration} />
          <Route path="/users" component={Users} />
        </Switch>
      </main>
    );
  }
}

export default Main;
