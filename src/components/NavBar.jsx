import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div>
          <div><Link to="/"><img src="./assets/logo.png" alt="Logo" /></Link></div>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/AboutMe">About</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
