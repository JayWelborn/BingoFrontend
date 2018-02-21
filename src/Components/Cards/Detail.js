import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class Detail extends Component {
  render() {
    return (
      <div>
        <h1>Detail</h1>
        <Link to="/cards">Card List</Link>
      </div>
    );
  }
}
