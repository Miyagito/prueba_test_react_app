import { Button } from '../common/Button';
import styles from './HomeScreen.module.scss';

export const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Home Screen</h1>
      <Button
        aria-label="Iniciar Prueba"
        className={styles.button}
        onClick={function (): void {
          // Implement the desired click functionality
        }}
      >
        Realizar Prueba
      </Button>
      <Button
        aria-label="Ver Resultado del Test"
        className={styles.button}
        onClick={function (): void {
          // Implement the desired click functionality
        }}
      >
        Resultado Test
      </Button>
    </div>
  );
};
