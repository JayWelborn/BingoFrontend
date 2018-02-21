import React, { Component } from 'react';
import Header from './Components/Header/';
import Main from './Components/Main';
import Footer from './Components/Footer/';

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
