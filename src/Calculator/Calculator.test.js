import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Calculator, {operations} from './Calculator';

afterEach(cleanup);

describe('Calculator', () => {
  

test('The calculator display should show should be visible and display zero by default', () => {
    const {getByTestId} = render(<Calculator />);

    const calculatorDisplay = getByTestId('calculator-display');

    expect(calculatorDisplay).toBeInTheDocument();
    expect(calculatorDisplay.innerHTML).toEqual('0');
});

test('Calculator should display number selected', () => {
  const {getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  
  fireEvent.click(number9);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('9');
});

test('Calculator should display number selected', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  const digits = [0,1,2,3,4,5,6,7,8,9];
  
  
  digits.forEach(digit => {
    const number = getByTestId(`number${digit}`);
    const clearButton = getByText('C');
    
    fireEvent.click(number);

    const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

    expect(calculatorDisplayText).toEqual(digit.toString());
  
    fireEvent.click(clearButton);
  })
});


test('Digits should concatentate before an operator is selected', () => {
  const {getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  
  fireEvent.click(number9);
  fireEvent.click(number9);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('99');
});

test('Display shows "0" when cancel/reset is selcted ', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  const clearButton = getByText('C');
  
  fireEvent.click(number9);
  fireEvent.click(clearButton);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('0');
});

test('Display shows decimals when selected', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  const decimalButton = getByText('.');
  
  fireEvent.click(number9);
  fireEvent.click(decimalButton);
  fireEvent.click(number9);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('9.9');
});

test('Display total only shows 1 decimal when multiple decimals are selected ', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  const decimalButton = getByText('.');
  
  fireEvent.click(number9);
  fireEvent.click(decimalButton);
  fireEvent.click(number9);
  fireEvent.click(decimalButton);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('9.9');
});


test('Adding 4 + 3 should displays 7', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number4 = getByTestId('number4');
  const number3 = getByTestId('number3');
  const addButton = getByText('+');
  const equalButton = getByText('=');


  fireEvent.click(number4);
  fireEvent.click(addButton);
  fireEvent.click(number3);
  fireEvent.click(equalButton);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('7');
});

test('Subtracting 4 - 3 should displays 1', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number4 = getByTestId('number4');
  const number3 = getByTestId('number3');
  const subtractButton = getByText('-');
  const equalButton = getByText('=');


  fireEvent.click(number4);
  fireEvent.click(subtractButton);
  fireEvent.click(number3);
  fireEvent.click(equalButton);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('1');
});

test('Multipling 4 x 3 should displays 12', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number4 = getByTestId('number4');
  const number3 = getByTestId('number3');
  const multiplyButton = getByText('*');
  const equalButton = getByText('=');


  fireEvent.click(number4);
  fireEvent.click(multiplyButton);
  fireEvent.click(number3);
  fireEvent.click(equalButton);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('12');
});

test('Dividing 12/3 should displays 4', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number1 = getByTestId('number1');
  const number2 = getByTestId('number2');
  const number3 = getByTestId('number3');
  const divideButton = getByText('/');
  const equalButton = getByText('=');


  fireEvent.click(number1);
  fireEvent.click(number2);
  fireEvent.click(divideButton);
  fireEvent.click(number3);
  fireEvent.click(equalButton);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('4');
});


test('Add operation should sum 2 numbers correctly', () => {
  const add3And4 = operations.add('3',4);

  expect(add3And4).toEqual(7);
});

test('Subtract operation should subtract 2 numbers correctly', () => {
  const subtract3From4 = operations.subtract('4',3);

  expect(subtract3From4).toEqual(1);
});

test('Subtract operation should give negative number if second operand is larger than first', () => {
  const subtract6From4 = operations.subtract('4',6);

  expect(subtract6From4).toEqual(-2);
});

test('Divide operation should divide operands correctly', () => {
  const divide6and3 = operations.divide('6',3);

  expect(divide6and3).toEqual(2);
});

test('Divide operation should return a message if seconard operand is 0', () => {
  const divide6and0 = operations.divide('6',0);

  expect(divide6and0).toEqual(`Can't divide by zero`);
});

test('Multiply operation should return correct result', () => {
  const multiply4x3 = operations.multiply('4',3);

  expect(multiply4x3).toEqual(12);
});

test('Multiply operation results in exponent result', () => {
  const multiply4x3 = operations.multiply(9999999999, 888888888);

  expect(multiply4x3).toEqual(12);
});



});