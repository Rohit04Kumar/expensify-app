// import { render, screen } from '@testing-library/react';
// import App from './App';

const add = (a, b) => a + b;

test('renders learn react link', () => {
  const result = add(3, 4)

  expect(result).toBe(7)
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
