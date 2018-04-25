import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <nav className="nav-outer">
            <ul className="nav-inner">
                <li><Link to="/discover">Discover</Link></li>
                <li><Link to="/trips">Trips</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
