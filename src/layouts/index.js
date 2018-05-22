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
import Gallery from 'react-photo-gallery';

import img01 from '../static/img/img01.jpg';
import img02 from '../static/img/img02.jpg';
import img03 from '../static/img/img03.jpg';
import img04 from '../static/img/img04.jpg';
import img05 from '../static/img/img05.jpg';
import img06 from '../static/img/img06.jpg';
import services from '../static/img/services.jpg';

const PHOTO_SET = [
  { src: img01, width: 3, height: 4 },
  { src: img02, width: 1.5, height: 1 },
  { src: img03, width: 1.5, height: 1 },
  { src: img04, width: 1.5, height: 1 },
  { src: img05, width: 3, height: 4 },
  { src: img06, width: 1.5, height: 1 }
];


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
      <Gallery photos={PHOTO_SET} />
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
