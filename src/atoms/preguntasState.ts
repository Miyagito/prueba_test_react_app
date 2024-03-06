import { atom } from 'recoil';
import { PreguntaType } from '../types/pregunta/preguntaTypes';

export const preguntasState = atom<PreguntaType[]>({
  key: 'preguntasState',
  default: []
});
