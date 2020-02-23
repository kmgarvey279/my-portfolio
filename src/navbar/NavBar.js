import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'About'
        };
    };
  render() {
        return (
            <div className="nav-bar">
                <ul className="nav-text" id="nav-links">
                    <li>
                        <h3 className={this.state.selected === 'About' ? 'active' : 'inactive'}>About</h3>
                    </li>
                    <li>
                        <h3 className={this.state.selected === 'Portfolio' ? 'active' : 'inactive'}>Portfolio</h3>
                    </li>
                    <li>
                        <h3 className={this.state.selected === 'CV' ? 'active' : 'inactive'}>CV</h3>
                    </li>
                    <li>
                        <h3 className={this.state.selected === 'Contact' ? 'active' : 'inactive'}>Contact</h3>
                    </li>
                </ul>
            </div>
        );
    };
}