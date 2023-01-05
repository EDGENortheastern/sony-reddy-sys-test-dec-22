import { getByDisplayValue, getByTestId, render, screen } from '@testing-library/react';
import App from './App';


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
