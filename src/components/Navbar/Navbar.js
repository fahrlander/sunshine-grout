import React, { Component } from 'react';
import Logo from '../../static/img/logo.svg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './Navbar.css';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavLinks = ({ isOpen, scrollToTop, handleToggle }) => {
  console.log(isOpen);
  return (
    <ul className={`Nav-links ${isOpen ? 'open' : null}`}>
      <li className="Nav-item mobile-hidden">
        <a className="Nav-link" onClick={scrollToTop}>
          <FontAwesomeIcon icon="angle-up" />
        </a>
      </li>
      
      <li className="Nav-item">
        <Link activeClass="active" className="Nav-link"
          to="services" spy={true} smooth={true} offset={-25}
          duration={500} onClick={handleToggle}>services
        </Link>
      </li>
      <li className="Nav-item">
        <Link activeClass="active" className="Nav-link"
          to="about" spy={true} smooth={true} offset={-25}
          duration={500} onClick={handleToggle}>about
        </Link>
      </li>
      <li className="Nav-item">
        <Link activeClass="active" className="Nav-link"
          to="gallery" spy={true} smooth={true} offset={-25}
          duration={500} onClick={handleToggle}>gallery
        </Link>
      </li>
      <li className="Nav-item">
        <Link activeClass="active" className="Nav-link"
          to="contact" spy={true} smooth={true} offset={-25}
          duration={500} onClick={handleToggle}>contact
        </Link>
      </li>
      <span className="separator mobile-hidden"></span>
      <li className="Nav-item mobile-hidden">
        <a className="Nav-link Nav-icon" href="https://www.facebook.com/sunrisegrout">
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </a>
      </li>

    </ul>
  );
};

class Navbar extends Component {

  state = {
    isOpen: false
  };

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

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <nav className="Nav box-shadow">
        <div className="Nav-container">
          <a href="/" className="Nav-logo">
            <img className="logo" src={Logo} />
          </a>

          <div onClick={this.handleToggle} className="Nav-toggle">
            <FontAwesomeIcon icon="bars" />
          </div>

          <NavLinks isOpen={this.state.isOpen}
            scrollToTop={this.scrollToTop}
            handleToggle={this.handleToggle} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
