import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Calculator.css';

const propTypes = {
  branding: PropTypes.string
}

class Caculator extends Component {
  render() {
    const {branding} = this.props;

    return (
      <div className="Calculator">
        {branding && <header className="Calculator-branding">
          <img width="200" src={branding} alt="[=] Equal Experts" />
        </header>}
      </div>
    );
  }
}

Caculator.propTypes = propTypes;

export default Caculator;