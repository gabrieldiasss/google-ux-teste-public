import React from 'react';
import clsx from 'clsx';
import { logoSizes } from './logo.css';
import logo from './../../assets/logo.svg';
interface LogoProps {
  size?: 'xs' | 'md' | 'xl';
}
export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  return (
    <img
      src={logo}
      alt="Logo do SENAI azul com o pingo do i em laranja"
      className={clsx([logoSizes[size]])}
    />
  );
};

Logo.displayName = 'Logo';
