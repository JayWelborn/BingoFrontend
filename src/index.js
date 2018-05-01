import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import bingoApp from './Redux/reducers'

const store = createStore(bingoApp)

/**
 * Render app wrapped in Redux Provider
 */
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
