import { render, screen } from '@testing-library/react';
import App from './App';

test('smoke test', () => { 
  expect(2+2).toBe(4);
});

test('renders H1 with dog lovers', () => {
  render(<App />);
  const headerWelcome = screen.getByText(/this is the page for dog lovers/i);
  expect(headerWelcome).toBeInTheDocument();
});

test('renders H2 with welcome', () => {
  render(<App />);
  const h2Greeting  = screen.getByText(/Enter a number to square/i);
  expect(h2Greeting).toBeInTheDocument();
});
