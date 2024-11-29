'use client';
import { localColorScheme } from '@/utils';
import {
  ColorScheme,
  ColorSchemeEnum,
  setColorScheme,
} from '@/utils/colorScheme';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorSchemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  notMountedColorScheme?: boolean;
}

const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: ColorSchemeEnum.Light,
  toggleColorScheme: () => {
    console.error('Must set the ColorSchemeProvider');
  },
  notMountedColorScheme: true,
});

export const useColorScheme = (): ColorSchemeContextType => {
  const context = useContext(ColorSchemeContext);
  if (context.notMountedColorScheme) {
    console.error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
};

interface ColorSchemeProviderProps {
  children: ReactNode;
  defaultColorScheme?: ColorScheme;
}

export const ColorSchemeProvider = ({
  children,
  defaultColorScheme,
}: ColorSchemeProviderProps) => {
  const getInitialColorScheme = (): ColorScheme => {
    const savedScheme = localColorScheme as ColorScheme;
    if (savedScheme) {
      return savedScheme;
    }
    if (defaultColorScheme) {
      return defaultColorScheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ColorSchemeEnum.Dark
      : ColorSchemeEnum.Light;
  };

  const [stateColorScheme, setStateColorScheme] = useState<ColorScheme>(
    getInitialColorScheme,
  );

  const toggleColorScheme = () => {
    const newScheme =
      stateColorScheme === ColorSchemeEnum.Light
        ? ColorSchemeEnum.Dark
        : ColorSchemeEnum.Light;
    setColorScheme(newScheme);
    setStateColorScheme(newScheme);
  };

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme: stateColorScheme, toggleColorScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};
