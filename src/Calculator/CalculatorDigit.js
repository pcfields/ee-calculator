import React from 'react';
import PropTypes from 'prop-types';

import './CalculatorDigit.css';

const propTypes = {
  digit: PropTypes.string.isRequired,
  onDigitClick: PropTypes.func.isRequired
};

const CalculatorDigit = ({digit, onDigitClick}) => {
  return (
    <button 
      data-testid={`number${digit}`} 
      className="CalculatorDigit" 
      onClick={onDigitClick} 
      type="button">
        {digit}
    </button>
  );
};

CalculatorDigit.propTypes = propTypes;

export default CalculatorDigit;