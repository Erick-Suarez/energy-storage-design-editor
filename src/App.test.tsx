import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('updates quantity and calculates totals correctly', () => {
    const { getByLabelText, getByText } = render(<App />);

    // Get the input field for a specific product and change its quantity
    const quantityInput = getByLabelText('Megapack 2XL');
    fireEvent.change(quantityInput, { target: { value: '2' } });

    // Get the summary section and check if the total price, land dimension, and energy density are updated correctly
    getByText('Total Price: $250000');
    getByText('Total Land Dimension: 900 sq. ft');
    getByText('Total Energy Density: 7.75 kWh');
  });
});