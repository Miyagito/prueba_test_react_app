import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { respuestasState } from '../../atoms/respuestasState';
import { isObjectEmpty } from '../../utils/helpers';
import { Button } from '../common/Button';
import styles from './HomeScreen.module.scss';

export const HomeScreen = () => {
  const navigate = useNavigate();
  const respuestasUsuario = useRecoilValue(respuestasState);
  const isDisabled = isObjectEmpty(respuestasUsuario);
  return (
    <div className={`${styles.container}`}>
      <Button
        aria-label="Iniciar Prueba"
        className={styles.button}
        onClick={() => navigate('/realizar-prueba')}
        disabled={!isDisabled}
      >
        Realizar Prueba
      </Button>
      <Button
        aria-label="Ver Resultado del Test"
        className={styles.button}
        onClick={() => navigate('/resultado-prueba')}
        disabled={isDisabled}
      >
        Resultado Test
      </Button>
    </div>
  );
};
