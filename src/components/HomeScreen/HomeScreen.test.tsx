import { render, screen } from '@testing-library/react';
import { HomeScreen } from './HomeScreen';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders realizar prueba button', () => {
  render(
    <RecoilRoot>
      <Router>
        <HomeScreen />
      </Router>
    </RecoilRoot>
  );
  const buttonElement = screen.getByText(/Realizar Prueba/i);
  expect(buttonElement).toBeInTheDocument();
});
