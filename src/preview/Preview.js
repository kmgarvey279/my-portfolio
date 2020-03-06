import React, { Component } from 'react';
import './Preview.css';
import PropTypes from "prop-types";

export default class Preview extends Component {
  constructor(props) {
      super(props);
  };

  render() {
      return (
        <div className="preview" id={this.props.number == this.props.current ? 'current-preview' : 'notCurrent-preview'}>
          {this.props.image}
          <div className="preview-num">{'00' + (parseInt(this.props.number) + 1)}</div>
        </div>
      );
    };
  }

  Preview.propTypes = {
    image: PropTypes.object,
    number: PropTypes.number,
    current: PropTypes.number
}