import { FC, useState } from 'react';
import usePreguntas from '../../hooks/usePreguntas';
import { PreguntaType } from '../../types/pregunta/preguntaTypes';
import { OptionList } from '../common/OptionList';
import { Button } from '../common/Button';
import styles from './TestScreen.module.scss';

export const TestScreen: FC = () => {
  const [preguntas, loading, error] = usePreguntas('Humor');
  const [respuestasUsuario, setRespuestasUsuario] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionChange = (preguntaId: number, opcionId: string) => {
    setRespuestasUsuario({
      ...respuestasUsuario,
      [preguntaId]: opcionId
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

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
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          >
            Finalizar
          </Button>
        </form>
      )}
    </div>
  );
};
