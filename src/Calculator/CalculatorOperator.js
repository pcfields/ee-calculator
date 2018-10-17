import React from 'react';
import './CalculatorOperator.css';

const CalculatorOperator = ({text, onClick, props}) => {
  return (
    <button 
      className="CalculatorOperator" 
      onClick={onClick} 
      type="button"
      {...props} >
        {text}
    </button>
  );
};

export default CalculatorOperator;