import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Loader from '../Common/Loader'


export default class Create extends Component {
  render() {
    return (
      <div className="card">
        <h1>Create Card</h1>
        <Link to="/cards">Cards Home</Link>
      </div>
    );
  }
}
