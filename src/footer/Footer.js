import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer">
    <ul className="nav-text" id="social-links">
        <li className="social">
            <a href="https://www.linkedin.com/in/kevin-m-garvey/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        </li>
        <li className="social">
            <a href="https://github.com/kmgarvey279"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
        </li>
        <li className="social">
            <a href="mailto:kmgarvey279@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x"/></a>
        </li>
    </ul>
      <p> &copy; 2020 Kevin Garvey</p>
    </div>
  );
}

export default Footer;