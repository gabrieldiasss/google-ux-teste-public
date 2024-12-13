export enum ColorSchemeEnum {
  Light = 'light',
  Dark = 'dark',
}
export type ColorScheme = ColorSchemeEnum;
export const colorSchemeKey = 'senai-color-scheme';

export const localColorScheme: ColorScheme =
  typeof window !== 'undefined'
    ? (window.localStorage.getItem(colorSchemeKey) as ColorScheme)
    : ColorSchemeEnum.Light;

export const setColorScheme = (scheme: ColorScheme) => {
  typeof window !== 'undefined' &&
    window.localStorage.setItem(colorSchemeKey, scheme);
};

export const getColorScheme = () => {
  return localColorScheme || ColorSchemeEnum.Light;
};
