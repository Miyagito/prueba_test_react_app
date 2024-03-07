import styles from './Header.module.scss';
import { ThemeSwitcher } from '../ButtonThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Prueba técnica React - BlinkLearning</h1>
      <ThemeSwitcher />
    </header>
  );
};
