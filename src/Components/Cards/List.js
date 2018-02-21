import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class List extends Component {
  render() {
    return (
      <div>
        <h1>Card List</h1>
        <ul>
          <li>
            <Link to="/cards/1">Card 1</Link>
          </li>
          <li>
            <Link to="/cards/create">Create Card</Link>
          </li>
        </ul>
      </div>
    );
  }
}
