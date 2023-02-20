import {  getAllByTestId ,render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Prime number generator/);
  });

  test('generates multiplication table of prime numbers correctly', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('number-input');
    const resultElement =getByTestId('result');

    
  });
});
