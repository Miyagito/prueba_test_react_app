import { render, screen } from '@testing-library/react';
import { HomeScreen } from './HomeScreen';

test('renders realizar prueba button', () => {
  render(<HomeScreen />);
  const buttonElement = screen.getByText(/Realizar Prueba/i);
  expect(buttonElement).toBeInTheDocument();
});
