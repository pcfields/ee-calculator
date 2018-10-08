import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Calculator from './Calculator';

afterEach(cleanup);

test('The calculator display should show should be visible and display zero by default', () => {
    const {getByTestId} = render(<Calculator />);

    const calculatorDisplay = getByTestId('calculator-display');

    expect(calculatorDisplay).toBeInTheDocument();
    expect(calculatorDisplay.innerHTML).toEqual('0');
});