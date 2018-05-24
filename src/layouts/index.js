import React from 'react';
import Helmet from 'react-helmet';
import 'typeface-open-sans';
import './index.css';

import '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-brands';

import Header from '../components/Header';
import Section from '../components/Section';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

import services from '../static/img/services.jpg';

const Layout = () => (
  <div>
    <Header />

    <Section id="services">
      <h2 className="title">Services</h2>
      <h3 className="subtitle">
        We provide services to both industrial and residential clients.
      </h3>
      <div className="row">
        <div className="col">
          <ul className="services">
            <li>Grout installation</li>
            <li>Caulking or re-caulking</li>
            <li>Tile replacement</li>
            <li>Grout tearout & re-grouting</li>
            <li>Grout & tile cleaning</li>
            <li>Tile installation</li>
          </ul>
        </div>
        <div className="col">
          <img className="img-res box-shadow" src={services} />
        </div>
      </div>
    </Section>

    <Section id="about" theme="dark">
      <h2 className="title">
        <span className="highlight">Why</span> Us?
      </h2>

      <p>
        As a veteran, I have learned to do things the right way the first time
        and to apply that to every project my company recieves. My promise to
        our clients is the completion of their projects in a prompt, correct and
        professional manner. I have had many years of experience with new
        construction, and love helping home owners freshen up their homes.
      </p>
    </Section>

    <Section id="gallery">
      <h2 className="title">Gallery</h2>
      <h3 className="subtitle">Check out some of our latest projects</h3>
      <Gallery />
    </Section>

    <Section id="contact" theme="dark">
      <h2 className="title">
        <span className="highlight">Get</span> in Touch
      </h2>
      <Contact />
    </Section>

    <footer className="footer">
      <div className="social">
        <a href="https://www.facebook.com/sunrisegrout">
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </a>
      </div>
      <small>
        2018 &copy; Sunshine Grout
      </small>
    </footer>
  </div>
);

export default Layout;
