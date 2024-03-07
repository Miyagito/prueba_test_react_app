import { atom } from 'recoil';
import { RespuestasUsuario } from '../types/respuesta/respuestaTypes';

export const respuestasState = atom<RespuestasUsuario>({
  key: 'respuestasState',
  default: {},
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedRespuestas = sessionStorage.getItem('respuestasUsuario');
      if (savedRespuestas != null) {
        setSelf(JSON.parse(savedRespuestas));
      }

      onSet((newRespuestas) => {
        sessionStorage.setItem(
          'respuestasUsuario',
          JSON.stringify(newRespuestas)
        );
      });
    }
  ]
});
