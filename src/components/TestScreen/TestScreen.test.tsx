import { render, screen } from '@testing-library/react';
import { TestScreen } from './TestScreen';
import usePreguntas from '../../hooks/usePreguntas';
import { PreguntaType } from '../../types/pregunta/preguntaTypes';

// Mock del hook usePreguntas para evitar llamadas de red en las pruebas
jest.mock('../../hooks/usePreguntas');

describe('TestScreen', () => {
  it('should display the loading state when questions are being fetched', () => {
    (usePreguntas as jest.Mock).mockReturnValue([[], true, '']);
    render(<TestScreen />);
    expect(screen.getByText(/Cargando preguntas.../i)).toBeInTheDocument();
  });

  // ...otros tests irán aquí
});
