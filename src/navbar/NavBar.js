import React, { Component } from 'react';
import PropTypes from "prop-types";
import './NavBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    };
  render() {
        return (
            <div className="nav-bar">
                <div className="name"><h3>Kevin Garvey</h3></div>
                <ul className="nav-text" id="tabs">
                    <li className="tab" onClick={() => this.props.changeView('About')}>
                        <h3 className={this.props.active === 'About' ? 'active' : 'inactive'}> About </h3>
                    </li>
                    <li className="tab"  onClick={() => this.props.changeView('Portfolio')}>
                        <h3 className={this.props.active === 'Portfolio' ? 'active' : 'inactive'}>Portfolio</h3>
                    </li>
                    <li className="tab"  onClick={() => this.props.changeView('CV')}>
                        <h3 className={this.props.active === 'CV' ? 'active' : 'inactive'}>CV</h3>
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