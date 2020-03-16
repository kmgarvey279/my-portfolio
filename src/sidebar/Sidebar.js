import React, { Component } from 'react';
import './Sidebar.css';
import PropTypes from "prop-types";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="sidebars">
                <div className="sidebar1"><p>{this.props.currentPage}</p></div>
                <div className="sidebar2"></div>
                <div className="sidebar3"></div>
                <div className="sidebar4"></div>
            </div>
        );
    };
}

Sidebar.propTypes = {
    currentPage: PropTypes.string
}