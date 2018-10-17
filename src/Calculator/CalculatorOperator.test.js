import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import CalculatorOperator from './CalculatorOperator';

afterEach(cleanup);
 
describe('CalculatorOperator', () => {
 test('displays correct button text', () => {
   const onOperationClick = jest.fn();
    const {getByText} = render(<CalculatorOperator onClick={onOperationClick}>+</CalculatorOperator>)
    const plusButton = getByText('+');

    expect(plusButton).toBeInTheDocument();
 });

 test('performs operation when clicked', () => {   
    const operation = jest.fn();
    const {getByText} = render(<CalculatorOperator onClick={operation}>+</CalculatorOperator>)
    const plusButton = getByText('+');

    fireEvent.click(plusButton);
    
    expect(operation).toHaveBeenCalledTimes(1);
    
 });
});