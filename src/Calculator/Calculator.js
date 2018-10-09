import React, { Component } from 'react';

import './Calculator.css';

export const operations = {
  add: (operand1, operand2) => Number(operand1) + Number(operand2),
  subtract: (operand1, operand2) => Number(operand1) - Number(operand2),
  divide: (operand1, operand2) => operand2 === 0 ? `Can't divide by zero` :Number(operand1) / Number(operand2),
  multiply: (operand1, operand2) =>  Number(operand1) * Number(operand2),
  equal: (operand1, operand2) =>  Number(operand2)
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
    const getUpdatedDisplayValue = (digit, displayValue) => displayValue === '0'? String(digit) : String(displayValue).concat(digit);

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
              <button className="CalculatorOperator" onClick={this.onOperatorClick('divide')} type="button">/</button>
            
              <button className="CalculatorOperator" onClick={this.onOperatorClick('multiply')} type="button">*</button>
            
              <button className="CalculatorOperator" onClick={this.onOperatorClick('subtract')} type="button">-</button>
            
              <button className="CalculatorOperator" onClick={this.onOperatorClick('add')} type="button">+</button>
            
              <button className="CalculatorOperator" onClick={this.onOperatorClick('equal')} type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;