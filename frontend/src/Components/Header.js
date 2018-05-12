import React, { Component } from 'react';

class Header extends Component {
  state = {
    title: 'Wanderlist',
    subtitle: 'Your Visual Travel Planner'
  };

  render() {
    return (
      <header>
        <div className="overlay">
          <h1>{this.state.title}</h1>
          <h2>{this.state.subtitle}</h2>
        </div>
        <div className="splash" />
        <a
          className="credit-badge"
          href="https://www.twenty20.com/canipel/photos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>@canipel via Twenty20</span>
        </a>
      </header>
    );
  }
}

export default Header;
