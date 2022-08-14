import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header>
      <NavLink to="/" id="header-logo">
        <img src={logo} alt="serious games" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/browse">Browse Games</NavLink>
        </li>
        <li>
          <NavLink to="/about">About me</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>🛒</li>
      </ul>
    </header>
  );
}

export default Header;
