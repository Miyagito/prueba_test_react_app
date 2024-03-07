import { atom } from 'recoil';

type Theme = 'light' | 'dark';

export const themeState = atom<Theme>({
  key: 'theme',
  default: 'light'
});
