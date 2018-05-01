import React, { Component } from 'react';
import Header from './Components/Header/';
import Main from './Components/Main';
import Footer from './Components/Footer/';

import {BrowserRouter} from 'react-router-dom';

/**
 * Container for app. Wraps entire app in BrowserRouter for url routing
 */
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="page-content">
            <Header />
            <Main />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
