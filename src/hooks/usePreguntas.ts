import { useEffect, useState } from 'react';
import { getPreguntas } from '../api/preguntasAPI';
import { PreguntaType } from '../types/pregunta/preguntaTypes';
import { useRecoilState } from 'recoil';
import { preguntasState } from '../atoms/preguntasState';

const usePreguntas = (
  categoria: string
): [PreguntaType[] | null, boolean, string] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [preguntas, setPreguntas] = useRecoilState(preguntasState);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const data = await getPreguntas();
        const preguntasCategoria = data.filter(
          (pregunta: PreguntaType) => pregunta.category === categoria
        );
        if (preguntasCategoria.length === 0) {
          throw new Error('La categoría solicitada no existe');
        }
        setPreguntas(preguntasCategoria);
        setLoading(false);
      } catch (error) {
        setError('Ocurrió un error al obtener las preguntas');
        setLoading(false);
      }
    };

    fetchPreguntas();
  }, [categoria, setPreguntas]);

  return [preguntas, loading, error];
};

export default usePreguntas;
