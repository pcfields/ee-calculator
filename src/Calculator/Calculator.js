import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Calculator.css';

const propTypes = {
  branding: PropTypes.string
}

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">

      </div>
    );
  }
}

Calculator.propTypes = propTypes;

export default Calculator;