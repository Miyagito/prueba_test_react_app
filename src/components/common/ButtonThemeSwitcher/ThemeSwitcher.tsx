import { useRecoilState } from 'recoil';
import { themeState } from '../../../atoms/themeState';
import styles from './themeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const isDarkMode = theme === 'dark';

  return (
    <div className={styles.themeSwitcher} onClick={toggleTheme}>
      <div className={styles.themeSwitcherLabel}>
        {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </div>
      <div
        className={`${styles.themeSwitcherToggle} ${isDarkMode ? styles.dark : ''}`}
      >
        <div className={styles.themeSwitcherCircle}></div>
      </div>
    </div>
  );
};
