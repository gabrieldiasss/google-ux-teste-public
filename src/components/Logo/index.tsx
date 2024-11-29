import React from 'react';
import clsx from 'clsx';
import { logoSizes } from './logo.css';
import logoLight from './../../assets/logo-light.svg';
import logoDark from './../../assets/logo-dark.svg';
import { useColorScheme } from '@/providers';
interface LogoProps {
  size?: 'xs' | 'md' | 'xl';
}
export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const { colorScheme } = useColorScheme();

  return (
    <img
      src={colorScheme === 'light' ? logoLight : logoDark}
      alt="Logo do SENAI azul com o pingo do i em laranja"
      className={clsx([logoSizes[size]])}
    />
  );
};

Logo.displayName = 'Logo';
