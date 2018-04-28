import React, { Component } from 'react';


export default class Square extends Component {

  render() {
    let className = this.props.clicked ? "clicked" : "";
    return (
      <td onClick={this.props.onClick} className={className}>
        {this.props.data}
      </td>
    );
  }
}
