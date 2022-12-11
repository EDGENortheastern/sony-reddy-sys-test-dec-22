import { render, screen } from '@testing-library/react';
import App from './App';

test('smoke test', () => { 
  expect(2+2).toBe(4);
});

test('renders H1 with welcome to dog lovers', () => {
  render(<App />);
  const headerWelcome = screen.getByText(/this is the page for dog lovers/i);
  expect(headerWelcome).toBeInTheDocument();
});
