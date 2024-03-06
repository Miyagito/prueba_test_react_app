import { FC } from 'react';
import { OptionType } from '../../../types/pregunta/preguntaTypes';
import styles from './OptionList.module.scss';

type OptionListProps = {
  options: OptionType[];
  preguntaId: number;
  handleOptionChange: (preguntaId: number, opcionId: string) => void;
  userAnswer: string | null;
};

export const OptionList: FC<OptionListProps> = ({
  options,
  preguntaId,
  handleOptionChange,
  userAnswer
}) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>Selecciona una opción</legend>
      <ul>
        {options.map((opcion) => (
          <li key={opcion.id} className={styles.opcion}>
            <label>
              <input
                type="radio"
                name={`pregunta-${preguntaId}`}
                value={opcion.id}
                checked={userAnswer === opcion.id}
                onChange={() => handleOptionChange(preguntaId, opcion.id)}
              />
              {opcion.text}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};
