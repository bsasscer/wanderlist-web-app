import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
    
    return (
        <nav className="nav-outer">
            <ul className="nav-inner">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/discover">Discover</NavLink></li>
                <li><NavLink to="/trips">Trips</NavLink></li>
                <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;
