import React, { Component } from 'react';

import CalculatorDigit from './CalculatorDigit';
import CalculatorOperator from './CalculatorOperator';

import './Calculator.css';

export const operations = {
  add: (operand1, operand2) => Number(operand1) + Number(operand2),
  subtract: (operand1, operand2) => Number(operand1) - Number(operand2),
  divide: (operand1, operand2) => operand2 === 0 ? `Can't divide by zero` :Number(operand1) / Number(operand2),
  multiply: (operand1, operand2) =>  Number(operand1) * Number(operand2),
  equal: (operand1, operand2) =>  Number(operand2),
  percentage: (operand) => Number(operand)/100
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

  onPercentClick = e => {
    
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
    const digits =[9,8,7,6,5,4,3,2,1,0];

    return (
      <div className="Calculator">
        <div 
          className="CalculatorDisplay" 
          data-testid="calculator-display">
            {displayValue}
        </div>

        <div className="CalculatorKeys">
          <div className="CalculatorInputs">
            <button 
              className="CalculatorDigit CancelBtn" 
              onClick={this.clearDisplay} 
              data-testid="clear-display" 
              type="button">
                C
            </button>
            
            <div className="CalculatorDigits">
              {digits.map(digit => 
                <CalculatorDigit key={digit} digit={`${digit}`} onDigitClick={this.onDigitClick(digit)} /> 
              )}
            
              <CalculatorDigit 
                digit="." 
                onDigitClick={this.onDecimalClick} 
              />
            </div>
          </div>

          <div className="CalculatorOperators">
             <CalculatorOperator
                text="/" 
                onClick={this.onOperatorClick('divide')} 
              />
                 
            
             <CalculatorOperator
                text="*" 
                onClick={this.onOperatorClick('multiply')} 
              />
               
            
             <CalculatorOperator
                text="-" 
                onClick={this.onOperatorClick('subtract')} 
              />
            
             <CalculatorOperator
                text="+"
                onClick={this.onOperatorClick('add')} 
              />
                          
             <CalculatorOperator
                text="=" 
                onClick={this.onOperatorClick('equal')} 
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;