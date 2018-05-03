import React, { Component } from 'react'
import {BrowserRouter}      from 'react-router-dom'
import {connect}            from 'react-redux'

import Header  from './Components/Header/'
import Main    from './Components/Main'
import Footer  from './Components/Footer/'
import Profile from './Components/Common/Profile'


function mapStateToProps(state) {
  return {
    userLoggedIn: state.userLoggedIn,
    user: state.currentUser,
    profile: state.currentProfile
  }
}

/**
 * Container for app. Wraps entire app in BrowserRouter for url routing
 */
class App extends Component {
  render() {
    let user = this.props.user
    let profile = this.props.profile
    return (
      <BrowserRouter>
        <div>
          <div className="page-content">
            <Header />
            <div className="page-body">
              {
                this.props.userLoggedIn ?
                <Profile user={user} profile={profile}/> : ''
              }
              <Main />
              {
                this.props.userLoggedIn ?
                <div className="profile-sidebar"></div> : ''
              }
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps)(App)
