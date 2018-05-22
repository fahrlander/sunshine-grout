import React from 'react';
import Navbar from '../Navbar';
import './Header.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Header = () => (
  <header id="header" className="Header">
    <Navbar />

    <h1 className="Header-title">
      Your one stop shop for tile &amp; grout
    </h1>

    <a href="tel:+12088804107" className="btn btn-primary">
      <FontAwesomeIcon icon="phone" flip="horizontal" />
      <span className="pad-left">Give us a call</span>
    </a>
  </header>
);

export default Header;
