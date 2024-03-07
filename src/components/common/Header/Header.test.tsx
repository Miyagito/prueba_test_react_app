import { render } from '@testing-library/react';
import { Header } from './Header';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  test('renders Header component', () => {
    render(
      <RecoilRoot>
        <Router>
          <Header />
        </Router>
      </RecoilRoot>
    );
  });
});

export {};
