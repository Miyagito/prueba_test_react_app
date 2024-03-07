import { useRecoilState } from 'recoil';
import { themeState } from '../../../atoms/themeState';
import styles from './themeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className={styles.themeSwitcherButton} onClick={toggleTheme}>
      Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};
