import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
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
