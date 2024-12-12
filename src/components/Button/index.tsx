import clsx from 'clsx';
import React from 'react';
import { Button as Btn } from '@headlessui/react';
import './button.css';

import {
  buttonDarkVariants,
  buttonLightVariants,
  buttonSizes,
  buttonStyle,
  buttonVariants,
} from './button.css';
import { Icon } from '@/components/Icon';
import { SymbolCodepoints } from './../../core/icons/types';
import { useColorScheme } from '@/providers';
import { ColorSchemeEnum } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  grow?: boolean;
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  children: React.ReactNode;
  iconProps?: {
    icon: SymbolCodepoints;
    position: 'right' | 'left';
  };
}
export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  grow = false,
  variant = 'filled',
  children,
  iconProps,
  onClick,
  ...props
}) => {
  const { colorScheme } = useColorScheme();
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
        colorScheme === ColorSchemeEnum.Dark
          ? buttonDarkVariants[variant]
          : buttonLightVariants[variant],
      ])}
      style={
        grow
          ? {
              ...props.style,
              width: '100%',
            }
          : {
              ...props.style,
            }
      }
    >
      {iconProps?.position === 'left' && renderIcon()}
      {children}
      {iconProps?.position === 'right' && renderIcon()}
    </Btn>
  );
};

Button.displayName = 'Button';
