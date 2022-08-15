import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <NavLink to="/about">Homepage</NavLink>
      <NavLink to="/about">Browse Games</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <p>
        <i>Future copyright notice here</i>
      </p>
      <NavLink to="/about">Legal</NavLink>
      <NavLink to="/contact">Data privacy</NavLink>
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
