import clsx from 'clsx';
import React from 'react';
import { Button as Btn } from '@headlessui/react';
import './button.css';

import { buttonSizes, buttonStyle, buttonVariants } from './button.css';
import { Icon } from '@/components/Icon';
import { SymbolCodepoints } from './../../core/icons/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outline' | 'subtle';
  children: React.ReactNode;
  iconProps?: {
    icon: SymbolCodepoints;
    position: 'right' | 'left';
  };
}
export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'filled',
  children,
  iconProps,
  onClick,
  ...props
}) => {
  const renderIcon = () => {
    if (!iconProps?.icon) return null;

    const iconSize =
      size === 'xs' ? 18 : size === 'sm' || size === 'md' ? 20 : 24;
    return <Icon name={iconProps?.icon} size={iconSize} color="inherit" />;
  };

  return (
    <Btn
      onClick={onClick}
      {...props}
      className={clsx([
        buttonStyle,
        buttonSizes[size],
        buttonVariants[variant],
      ])}
    >
      {iconProps?.position === 'left' && renderIcon()}
      {children}
      {iconProps?.position === 'right' && renderIcon()}
    </Btn>
  );
};
