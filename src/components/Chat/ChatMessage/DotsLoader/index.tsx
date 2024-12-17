import { useColorScheme } from '@/providers';
import clsx from 'clsx';
import React from 'react';
import {
  dotColorSchemeStyle,
  dotsLoaderStyle,
  dotStyle,
} from './dotsLoader.css';

export const Dotsloader = (): JSX.Element => {
  const { colorScheme } = useColorScheme();

  return (
    <div className={dotsLoaderStyle}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={clsx(dotStyle, dotColorSchemeStyle[colorScheme])}
        />
      ))}
    </div>
  );
};
