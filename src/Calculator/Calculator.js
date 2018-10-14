import React, { Component } from 'react';

import CalculatorDigit from './CalculatorDigit';

import './Calculator.css';

export const operations = {
  add: (operand1, operand2) => Number(operand1) + Number(operand2),
  subtract: (operand1, operand2) => Number(operand1) - Number(operand2),
  divide: (operand1, operand2) => operand2 === 0 ? `Can't divide by zero` :Number(operand1) / Number(operand2),
  multiply: (operand1, operand2) =>  Number(operand1) * Number(operand2),
  equal: (operand1, operand2) =>  Number(operand2),
}
 

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false
    };
  }
  
  onDigitClick = digit => e => {
    const {displayValue, waitingForSecondOperand} = this.state;
    const getUpdatedDisplayValue = (digit, displayValue) =>
      displayValue === '0' ? String(digit) : String(displayValue).concat(digit);

    if(waitingForSecondOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForSecondOperand: false
      });
    } else {
      this.setState({
        displayValue: getUpdatedDisplayValue(digit, displayValue)
      });
    }
  };

  onDecimalClick = e => {
    const {displayValue} = this.state;
    const doesNotAlreadyContainDot = !displayValue.includes('.');

    if(doesNotAlreadyContainDot){
      this.setState({
        displayValue: String(displayValue).concat('.')
      });  
    }
  }

  onOperatorClick = operatorClicked => { 
    const selectedOperator = operatorClicked;

    return e => {
      const {displayValue, firstOperand, operator} = this.state;
      const currentValue = Number(displayValue);

      if(firstOperand === null) {
        this.setState({
          firstOperand: currentValue
        })
      } else if(operator) {
        const totalFromOperands = operations[operator](firstOperand,currentValue);

        this.setState({
          firstOperand: totalFromOperands,
          displayValue: String(totalFromOperands)
        });
      }

      this.setState({
        waitingForSecondOperand: true,
        operator: selectedOperator
      })
    }
  }

  clearDisplay = () => {
    this.setState({
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false
    })
  }

  render() {
    const {displayValue} = this.state;

    return (
      <div className="Calculator">
        <div className="CalculatorDisplay" data-testid="calculator-display">{displayValue}</div>

        <div className="CalculatorKeys">
          <div className="CalculatorInputs">
            <button className="CalculatorDigit CancelBtn" onClick={this.clearDisplay} data-testid="clear-display" type="button">C</button>
            
            <div className="CalculatorDigits">
                <CalculatorDigit digit="9" onDigitClick={this.onDigitClick(9)} />
                <CalculatorDigit digit="8" onDigitClick={this.onDigitClick(8)} />
                <CalculatorDigit digit="7" onDigitClick={this.onDigitClick(7)} />
                <CalculatorDigit digit="6" onDigitClick={this.onDigitClick(6)} />
                <CalculatorDigit digit="5" onDigitClick={this.onDigitClick(5)} />
                <CalculatorDigit digit="4" onDigitClick={this.onDigitClick(4)} />
                <CalculatorDigit digit="3" onDigitClick={this.onDigitClick(3)} />
                <CalculatorDigit digit="2" onDigitClick={this.onDigitClick(2)} />
                <CalculatorDigit digit="1" onDigitClick={this.onDigitClick(1)} />
                <CalculatorDigit digit="0" onDigitClick={this.onDigitClick(0)} />
                <CalculatorDigit digit="." onDigitClick={this.onDecimalClick} />
            </div>
          </div>

          <div className="CalculatorOperators">
              <button 
                className="CalculatorOperator" 
                onClick={this.onOperatorClick('divide')} 
                type="button">/</button>
            
              <button 
                className="CalculatorOperator" 
                onClick={this.onOperatorClick('multiply')} 
                type="button">
                *
              </button>
            
              <button 
                className="CalculatorOperator" 
                onClick={this.onOperatorClick('subtract')} 
                type="button">
                -
              </button>
            
              <button 
                className="CalculatorOperator" 
                onClick={this.onOperatorClick('add')} 
                type="button">
                +
              </button>
            
              <button 
                className="CalculatorOperator" 
                onClick={this.onOperatorClick('equal')} 
                type="button">
                =
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;