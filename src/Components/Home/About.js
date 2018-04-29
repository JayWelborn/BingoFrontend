import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (
      <div className="card">
        <h1>About Bingo</h1>
        <p>
            My name is <a href="ttp/www.jaywelborn.com" target="blank">Jay Welborn</a>.
            I work for a very large organization that has very frequent required training sessions.
            These sessions are delivered to auditoriums full of people, and each one is the same every single year.
            After seven years of this one of my colleagues, let&rsquo;s call him &ldquo;Jimothy&rdquo; started making
            bingo cards with phrases we knew would be included in different classes.
        </p>
        <p>
            I started studying web development a few months after the first bingo game was played, and I saw a
            golden opportunity. I made a prototype on my personal website that would let me make digital bingo cards
            to be viewed on smart phones or tablets. The appeal of these bingo cards went beyond the briefing room and
            into children&rsquo;s birthday parties, get togethers, and more. After creating a multi-user version in Django,
            I wanted to learn ReactJS.
        </p>
        <p>
            The website you&rsquo;re on right now is my first multi-user React App, and is running of of my first Django API.
            I made it to put into practice things I've learned about API design and web application development. Thank you for
            visiting, I hope you enjoy making and playing your own custom bingo cards. If you have suggestions for improving
            the site, or for features I should consider adding please <a href="/contact">let me know.</a>
        </p>
        <p><em>Not recommended for students in classrooms.</em></p>
        <p><em>Don&rsquo;t get caught.</em></p>
    </div>
    );
  }
}
