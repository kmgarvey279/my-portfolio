import React, { Component } from 'react';
import PropTypes from "prop-types";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    };
  render() {
        return (
            <div className="nav-bar">
                <ul className="nav-text" id="nav-links">
                    <li onClick={() => this.props.changeView('About')}>
                        <h3 className={this.props.active === 'About' ? 'active' : 'inactive'}>About</h3>
                    </li>
                    <li onClick={() => this.props.changeView('Portfolio')}>
                        <h3 className={this.props.active === 'Portfolio' ? 'active' : 'inactive'}>Portfolio</h3>
                    </li>
                    <li onClick={() => this.props.changeView('CV')}>
                        <h3 className={this.props.active === 'CV' ? 'active' : 'inactive'}>CV</h3>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kevin-m-garvey/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/kmgarvey279"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
                    </li>
                    <li>
                        <a href="mailto:kmgarvey279@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x"/></a>
                    </li>
                </ul>
            </div>
        );
    };
}

NavBar.propTypes = {
    active: PropTypes.string,
    changeView: PropTypes.func
}