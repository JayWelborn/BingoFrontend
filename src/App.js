import React, { Component } from 'react';
import Header from './Header/';
import Main from './Main';
import Footer from './Footer/';

import {BrowserRouter} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
