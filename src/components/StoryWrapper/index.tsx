import React, { ReactNode } from 'react';
import { useColorScheme } from '@/providers';
import { buttonMode } from './story.css';

export const StoryWrapper = ({ children }: { children: ReactNode }) => {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <div>
      <button className={buttonMode} onClick={toggleColorScheme}>
        {colorScheme === 'light' ? 'Tema Escuro' : 'Tema Claro'}
      </button>
      {children}
    </div>
  );
};
