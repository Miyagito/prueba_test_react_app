import { render, screen } from '@testing-library/react';
import App from './App';

test('renders realizar prueba button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Realizar Prueba/i);
  expect(buttonElement).toBeInTheDocument();
});
