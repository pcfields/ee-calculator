import React, { Component } from 'react';

import './Calculator.css';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
      total: 0,
      calculationComplete: false
    };
  }
  
  onDigitClick = number => e => {

    this.setState({
        total: number
      });
  };

  onDecimalClick = e => {

  }

  render() {
    const {total} = this.state;

    return (
      <div className="Calculator">
        <div className="CalculatorDisplay" data-testid="calculator-display">{total}</div>
        <div className="CalculatorKeys">
          <div className="CalculatorInputs">
          <button className="CalculatorDigitBtn CancelBtn" type="button">C</button>
            <div className="CalculatorDigits">
                  <button data-testid="number9" className="CalculatorDigitBtn" onClick={this.onDigitClick(9)} type="button">9</button>
                
                  <button data-testid="number8" className="CalculatorDigitBtn" onClick={this.onDigitClick(8)} type="button">8</button>
                
                  <button data-testid="number7" className="CalculatorDigitBtn" onClick={this.onDigitClick(7)} type="button">7</button>
                
                  <button data-testid="number6" className="CalculatorDigitBtn" onClick={this.onDigitClick(6)} type="button">6</button>
                
                  <button data-testid="number5" className="CalculatorDigitBtn" onClick={this.onDigitClick(5)} type="button">5</button>
                
                  <button data-testid="number4" className="CalculatorDigitBtn" onClick={this.onDigitClick(4)} type="button">4</button>
                
                  <button data-testid="number3" className="CalculatorDigitBtn" onClick={this.onDigitClick(3)} type="button">3</button>
                
                  <button data-testid="number2" className="CalculatorDigitBtn" onClick={this.onDigitClick(2)} type="button">2</button>
                
                  <button data-testid="number1" className="CalculatorDigitBtn" onClick={this.onDigitClick(1)} type="button">1</button>
                
                  <button data-testid="number0" className="CalculatorDigitBtn" onClick={this.onDigitClick(0)} type="button">0</button>

                  <button data-testid="decimal" className="CalculatorDigitBtn" onClick={this.onDecimalClick} type="button">.</button>
            </div>
          </div>
          <div className="CalculatorOperators">
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

export default Calculator;