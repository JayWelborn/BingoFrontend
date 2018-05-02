import React, { Component } from 'react';


/**
 * Class for a search box that gets a filter string and passes it to
 * a function provided by the parent. MUST be called with "onTextChange".
 */
export default class SearchFilter extends Component {
  render() {
    return (
      <input className="text-field"
             type="text"
             onKeyUp={event => this.props.onTextChange(event.target.value)}
             placeholder="search"
      />
    );
  }
}
