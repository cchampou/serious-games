import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/browse">Browse Games</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <p>
        <i>Future copyright notice here</i>
      </p>
      <NavLink to="/legal">Legal</NavLink>
      <NavLink to="/data">Data privacy</NavLink>
      <a
        href="https://github.com/cchampou/serious-games"
        target="_blank"
        rel="noreferrer"
      >
        Source code on Github
      </a>
    </footer>
  );
}

export default Footer;
