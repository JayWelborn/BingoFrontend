import React, { Component } from 'react';

/**
 * Container for footer
 */
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section>
          <ul>
            <li><a class="nav-link" href="/">Home</a></li>
            <li><a class="nav-link" href="/about">About</a></li>
            <li><a class="nav-link" href="/contact">Contact</a></li>
          </ul>
        </section>
        <section>
          <ul>
            <li><a class="nav-link" href="/cards">Cards</a></li>
            <li><a class="nav-link" href="href=/users">Bingonauts</a></li>
          </ul>
        </section>
        <section>
          <p>This website was created by <a target="blank" href="http://www.jaywelborn.com">Jay Welborn</a>.</p>
        </section>
      </footer>
    );
  }
}
