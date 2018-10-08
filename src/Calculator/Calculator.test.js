import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Calculator from './Calculator';

afterEach(cleanup);

test('The calculator display should show should be visible and display zero by default', () => {
    const {getByTestId} = render(<Calculator />);

    const calculatorDisplay = getByTestId('calculator-display');

    expect(calculatorDisplay).toBeInTheDocument();
    expect(calculatorDisplay.innerHTML).toEqual('0');
});

test('Calculator should display number selected selected', () => {
  const {getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  
  fireEvent.click(number9);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('9');
});

test('Calculator should display number selected selected', () => {
  const {getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  
  fireEvent.click(number9);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('9');
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

test('Display shows decimals when selected ', () => {
  const {getByText, getByTestId} = render(<Calculator />);
  const number9 = getByTestId('number9');
  const decimalButton = getByText('.');
  
  fireEvent.click(number9);
  fireEvent.click(decimalButton);
  fireEvent.click(number9);

  const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  expect(calculatorDisplayText).toEqual('9.9');
});

test('Display only shows 1 decimal when selected ', () => {
  // const {getByText, getByTestId} = render(<Calculator />);
  // const number9 = getByTestId('number9');
  // const decimalButton = getByText('.');
  
  // fireEvent.click(number9);
  // fireEvent.click(decimalButton);
  // fireEvent.click(number9);

  // const calculatorDisplayText = getByTestId('calculator-display').innerHTML;

  // expect(calculatorDisplayText).toEqual('9.9');
});