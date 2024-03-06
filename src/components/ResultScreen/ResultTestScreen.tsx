import { useRecoilValue } from 'recoil';
import styles from './ResultTestScreen.module.scss';
import { OptionType, PreguntaType } from '../../types/pregunta/preguntaTypes';
import { respuestasState } from '../../atoms/respuestasState';
import { preguntasState } from '../../atoms/preguntasState';

export const ResultTestScreen = () => {
  const respuestasUsuario = useRecoilValue(respuestasState);
  const preguntas = useRecoilValue(preguntasState);

  const checkMark = '✅';
  const crossMark = '❌';

  return (
    <div className={styles.container}>
      <h1>Resultado del Test</h1>
      {!preguntas && <p>No hay preguntas para mostrar.</p>}
      {preguntas &&
        preguntas.map((pregunta: PreguntaType) => (
          <div key={pregunta.id} className={styles.pregunta}>
            <h2>{pregunta.questionText}</h2>
            <ul>
              {pregunta.options.map((opcion: OptionType) => {
                const isCorrect = opcion.isCorrect;
                const isSelected = respuestasUsuario[pregunta.id] === opcion.id;
                const isCorrectAndSelected = isCorrect && isSelected;

                return (
                  <li
                    key={opcion.id}
                    className={
                      isCorrect
                        ? styles.correcta
                        : isSelected
                          ? styles.seleccionada
                          : ''
                    }
                  >
                    {opcion.text} {isCorrectAndSelected && checkMark}
                    {!isCorrect && isSelected && crossMark}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
    </div>
  );
};
