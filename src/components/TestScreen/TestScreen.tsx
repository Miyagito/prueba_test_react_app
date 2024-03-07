import { FC } from 'react';
import usePreguntas from '../../hooks/usePreguntas';
import { PreguntaType } from '../../types/pregunta/preguntaTypes';
import { OptionList } from '../common/OptionList';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { respuestasState } from '../../atoms/respuestasState';
import { areAllQuestionsAnswered } from '../../utils/helpers';

import styles from './TestScreen.module.scss';

export const TestScreen: FC = () => {
  const category = 'Humor';
  const [preguntas, loading, error] = usePreguntas(category);
  const navigate = useNavigate();
  const [respuestasUsuario, setRespuestasUsuario] =
    useRecoilState(respuestasState);

  const handleOptionChange = (preguntaId: number, opcionId: string) => {
    setRespuestasUsuario({
      ...respuestasUsuario,
      [preguntaId]: opcionId
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/');
  };

  const isSubmitDisabled = !areAllQuestionsAnswered(
    preguntas ?? [],
    respuestasUsuario
  );

  return (
    <div className={styles.container}>
      <h1>Preguntas sobre Hardware</h1>
      {loading && <p>Cargando preguntas...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && preguntas && (
        <form onSubmit={handleSubmit}>
          {preguntas.map((pregunta: PreguntaType) => (
            <div key={pregunta.id} className={styles.pregunta}>
              <h2>{pregunta.questionText}</h2>
              <ul>
                <OptionList
                  options={pregunta.options}
                  preguntaId={pregunta.id}
                  handleOptionChange={handleOptionChange}
                  userAnswer={respuestasUsuario[pregunta.id]}
                />
              </ul>
            </div>
          ))}
          <Button
            type="submit"
            className={styles.enviar}
            disabled={isSubmitDisabled}
          >
            Finalizar
          </Button>
        </form>
      )}
    </div>
  );
};
