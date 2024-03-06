import { atom } from 'recoil';
import { RespuestasUsuario } from '../types/respuesta/respuestaTypes';

export const respuestasState = atom<RespuestasUsuario>({
  key: 'respuestasState',
  default: {}
});
