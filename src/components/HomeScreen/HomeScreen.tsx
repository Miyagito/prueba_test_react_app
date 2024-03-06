import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import styles from './HomeScreen.module.scss';

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Home Screen</h1>
      <Button
        aria-label="Iniciar Prueba"
        className={styles.button}
        onClick={() => navigate('/realizar-prueba')}
      >
        Realizar Prueba
      </Button>
      <Button
        aria-label="Ver Resultado del Test"
        className={styles.button}
        onClick={() => navigate('/resultado-prueba')}
      >
        Resultado Test
      </Button>
    </div>
  );
};
