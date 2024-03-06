import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { HomeScreen } from '../components/HomeScreen';
import { ResultTestScreen } from '../components/ResultScreen';
import { TestScreen } from '../components/TestScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeScreen />
      },
      {
        path: 'resultado-prueba',
        element: <ResultTestScreen />
      },
      {
        path: 'realizar-prueba',
        element: <TestScreen />
      }
    ]
  }
]);
