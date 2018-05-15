import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-outer">
      <NavLink exact to="/" className="logo-placeholder">
        wanderlist
      </NavLink>
      <ul className="nav-inner">
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
        <li>
          <NavLink to="/albums">Albums</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
