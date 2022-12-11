


test('smoke test', () => { 
  expect(2+2).toBe(4);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is the page for dog lovers/i);
  expect(linkElement).toBeInTheDocument();

});
