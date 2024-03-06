import { Outlet } from 'react-router-dom';
import { Header } from './components/common/Header';

export const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
