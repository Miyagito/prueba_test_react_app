import { PreguntaType } from '../types/pregunta/preguntaTypes';
import preguntas from '../data/preguntas-mocked.json';

export const getPreguntas = async (): Promise<PreguntaType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(preguntas as PreguntaType[]);
      } catch (error) {
        reject(new Error('Error al obtener las preguntas'));
      }
    }, 1000);
  });
};
