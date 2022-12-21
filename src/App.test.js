import { render, screen } from '@testing-library/react';
import App from './App';

test('smoke test', () => { 
  expect(2+2).toBe(4);
});

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
