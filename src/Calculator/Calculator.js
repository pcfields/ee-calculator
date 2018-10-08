import React, { Component } from 'react';

import './Calculator.css';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstOperand: 0,
      displayTotal: '0',
      operator: null,
      waitingForSecondOperand: false
    };
  }
  
  onDigitClick = number => e => {
    const {displayTotal} = this.state;

    if(displayTotal === '0') {
      this.setState({
        displayTotal: String(number),
        waitingForSecondOperand: false
      });
    } else {
      this.setState({
        displayTotal: String(displayTotal).concat(number)
      });
    }
  };

  onDecimalClick = e => {
    const {displayTotal} = this.state;

    this.setState({
      displayTotal: String(displayTotal).concat('.')
    })
  }

  clearDisplay = () => {
    this.setState({
      displayTotal: '0',
      waitingForSecondOperand: false
    })
  }

  render() {
    const {displayTotal} = this.state;

    return (
      <div className="Calculator">
        <div className="CalculatorDisplay" data-testid="calculator-display">{displayTotal}</div>
        <div className="CalculatorKeys">
          <div className="CalculatorInputs">
          <button className="CalculatorDigitBtn CancelBtn" onClick={this.clearDisplay} data-testid="clear-display" type="button">C</button>
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