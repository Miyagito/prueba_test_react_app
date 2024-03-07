import { Outlet } from 'react-router-dom';
import { Header } from './components/common/Header';
import { useRecoilValue } from 'recoil';
import { themeState } from './atoms/themeState';
import './styles/globals.css';

export const App = () => {
  const theme = useRecoilValue(themeState);
  return (
    <div className={theme}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
