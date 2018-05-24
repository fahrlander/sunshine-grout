import React, { Component } from 'react';
import Navbar from '../Navbar';
import './Header.css';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Header extends Component {

  componentDidMount = () => {

    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  };

  componentWillUnmount = () => {
    Events.scrollEvent.remove('begin');

    Events.scrollEvent.remove('end');
  };

  render() {
    return (
      <header id="header" className="Header">
        <Navbar />

        <h1 className="Header-title">
          Your one stop shop for tile &amp; grout
    </h1>

        <a href="tel:+12088804107" className="btn btn-primary">
          <FontAwesomeIcon icon="phone" flip="horizontal" />
          <span className="pad-left">Give us a call</span>
        </a>

        <Link className="btn btn-primary mobile-hidden"
          to="services" spy={true} smooth={true} offset={-25}
          duration={300}>Learn more
        </Link>
      </header>
    );
  }
};

export default Header;
