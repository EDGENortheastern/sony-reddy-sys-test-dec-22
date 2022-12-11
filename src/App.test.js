import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this will be the landing page/i);
  expect(linkElement).toBeInTheDocument();
});
