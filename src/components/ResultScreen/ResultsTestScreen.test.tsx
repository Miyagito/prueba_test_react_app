import { render, screen } from '@testing-library/react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultTestScreen } from './ResultTestScreen';
import { preguntasState } from '../../atoms/preguntasState';
import { respuestasState } from '../../atoms/respuestasState';

const initializeState = ({ set }: MutableSnapshot) => {
  set(respuestasState, {
    1: '2',
    2: '1'
  });
  set(preguntasState, [
    {
      id: 1,
      questionText: '¿Cuál es tu color favorito?',
      category: 'General',
      options: [
        { id: '1', text: 'Rojo', isCorrect: false },
        { id: '2', text: 'Azul', isCorrect: true },
        { id: '3', text: 'Verde', isCorrect: false }
      ]
    },
    {
      id: 2,
      questionText: '¿Cuál es tu comida favorita?',
      category: 'General',
      options: [
        { id: '1', text: 'Pizza', isCorrect: false },
        { id: '2', text: 'Hamburguesa', isCorrect: true },
        { id: '3', text: 'Sushi', isCorrect: false }
      ]
    }
  ]);
};

describe('ResultTestScreen', () => {
  it('renders questions and marks correct and incorrect answers', () => {
    render(
      <RecoilRoot initializeState={initializeState}>
        <Router>
          <ResultTestScreen />
        </Router>
      </RecoilRoot>
    );

    // Realiza tus aserciones aquí
    expect(screen.getByText('¿Cuál es tu color favorito?')).toBeInTheDocument();
    expect(screen.getByText('Azul ✅')).toBeInTheDocument();
    expect(screen.getByText('Pizza ❌')).toBeInTheDocument();
  });
});
