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
        <div className="CalculatorDisplay" data-testid="calculator-display">0</div>
        <div className="CalculatorKeys">
          <div className="CalculatorInputs">
          <button className="CalculatorDigitBtn CancelBtn" type="button">C</button>
            <div className="CalculatorDigitsList">
                  <button className="CalculatorDigitBtn" type="button">9</button>
                
                  <button className="CalculatorDigitBtn" type="button">8</button>
                
                  <button className="CalculatorDigitBtn" type="button">7</button>
                
                  <button className="CalculatorDigitBtn" type="button">6</button>
                
                  <button className="CalculatorDigitBtn" type="button">5</button>
                
                  <button className="CalculatorDigitBtn" type="button">4</button>
                
                  <button className="CalculatorDigitBtn" type="button">3</button>
                
                  <button className="CalculatorDigitBtn" type="button">2</button>
                
                  <button className="CalculatorDigitBtn" type="button">1</button>
                
                  <button className="CalculatorDigitBtn" type="button">0</button>

                  <button className="CalculatorDigitBtn" type="button">.</button>
            </div>
          </div>
          <div className="CalculatorOperatorsList">
              <button className="CalculatorOperator" type="button">/</button>
            
              <button className="CalculatorOperator" type="button">*</button>
            
              <button className="CalculatorOperator" type="button">-</button>
            
              <button className="CalculatorOperator" type="button">+</button>
            
              <button className="CalculatorOperator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = propTypes;

export default Calculator;