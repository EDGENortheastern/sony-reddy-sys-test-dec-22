import { getByDisplayValue, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import { square } from './utils/utils';



test('renders H1 with dog lovers', () => {
  render(<App />);
  const headerWelcome = screen.getByText(/When a number has been multiplied by itself/i);
  expect(headerWelcome).toBeInTheDocument();
});

test('renders H2 with welcome', () => {
  render(<App />);
  const h2Greeting  = screen.getByText(/Type a number to find the square/i);
  expect(h2Greeting).toBeInTheDocument();
  
});
test('renders Clear button on home page', () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();

});
test('renders Result on home page', () => {
  render(<App />);
  const Text  = screen.getByText(/Result/i);
  expect(Text).toBeInTheDocument();

});
test('should return 16 for square of 4', () => {
  const Number = square("4");
  expect(Number).toBe(16);

});
test('should return 64 for square of -8', () => {
  const Number = square("-8");
  expect(Number).toBe(64);

});
test('should return 0 for square of 0', () => {
  const Number = square("0");
  expect(Number).toBe(0);
});



