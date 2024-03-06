import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TestScreen } from './TestScreen';
import usePreguntas from '../../hooks/usePreguntas';
import { RecoilRoot } from 'recoil';
import { PreguntaType } from '../../types/pregunta/preguntaTypes';

jest.mock('../../hooks/usePreguntas');

describe('TestScreen', () => {
  it('should display the loading state when questions are being fetched', () => {
    (usePreguntas as jest.Mock).mockReturnValue([[], true, '']);
    render(
      <RecoilRoot>
        <Router>
          <TestScreen />
        </Router>
      </RecoilRoot>
    );
    expect(screen.getByText(/Cargando preguntas.../i)).toBeInTheDocument();
  });
  it('should render questions correctly after fetching', async () => {
    const mockPreguntas: PreguntaType[] = [
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
    ];
    (usePreguntas as jest.Mock).mockReturnValue([mockPreguntas, false, '']);
    render(
      <RecoilRoot>
        <Router>
          <TestScreen />
        </Router>
      </RecoilRoot>
    );
    for (const pregunta of mockPreguntas) {
      await waitFor(() => {
        expect(screen.getByText(pregunta.questionText)).toBeInTheDocument();
      });
    }
  });
});
