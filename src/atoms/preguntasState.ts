import { atom } from 'recoil';
import { PreguntaType } from '../types/pregunta/preguntaTypes';

export const preguntasState = atom<PreguntaType[]>({
  key: 'preguntasState',
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedPreguntas = sessionStorage.getItem('preguntas');
      if (savedPreguntas != null) {
        setSelf(JSON.parse(savedPreguntas));
      }

      onSet((newPreguntas) => {
        sessionStorage.setItem('preguntas', JSON.stringify(newPreguntas));
      });
    }
  ]
});
