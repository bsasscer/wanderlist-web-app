import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {

        return (
            <header>
                <div className="overlay"></div>
                <nav className="nav-outer">
                    <ul className="nav-inner">
                        <li><Link to="/discover">Discover</Link></li>
                        <li><Link to="/trips">Trips</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
                <div className="splash">
                    <h1>Wanderlist</h1>
                    <h2>Your Visual Travel Planner</h2>
                </div>
            </header>
        );
    }
}

export default Header;
