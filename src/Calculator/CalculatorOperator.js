import React from 'react';

const CalculatorOperator = ({text, onClick}) => {
  return (
    <button 
      className="CalculatorOperator" 
      onClick={onClick} 
      type="button">
        {text}
    </button>
  );
};

export default CalculatorOperator;