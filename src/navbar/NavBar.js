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
                        <h5 className={this.props.active === 'About' ? 'active' : 'inactive'}> About </h5>
                    </li>
                    <li className="tab"  onClick={() => this.props.changeView('Portfolio')}>
                        <h5 className={this.props.active === 'Portfolio' ? 'active' : 'inactive'}>Portfolio</h5>
                    </li>
                    <li className="tab"  onClick={() => this.props.toggleModal()}>
                        <h5 className={this.props.modal ? 'active' : 'inactive'}>CV</h5>
                    </li>
                </ul>
            </div>
        );
    };
}

NavBar.propTypes = {
    active: PropTypes.string,
    modal: PropTypes.bool,
    changeView: PropTypes.func,
    toggleModal: PropTypes.func
}