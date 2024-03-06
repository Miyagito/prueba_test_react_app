import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';

test('renders realizar prueba button', () => {
  render(
    <MemoryRouter>
      <HomeScreen />
    </MemoryRouter>
  );
  const buttonElement = screen.getByText(/Realizar Prueba/i);
  expect(buttonElement).toBeInTheDocument();
});
