import clsx from 'clsx';
import React from 'react';
import { Button as Btn } from '@headlessui/react';
import './actionIcon.css';

import {
  actionIconStyle,
  actionIconSizes,
  actionIconDarkVariants,
  actionIconLightVariants,
  actionIconVariants,
} from './actionIcon.css';
import { Icon } from '@/components/Icon';
import { SymbolCodepoints } from './../../core/icons/types';
import { useColorScheme } from '@/providers';
import { ColorSchemeEnum } from '@/utils';

export interface ActionIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outline' | 'subtle';
  icon: SymbolCodepoints;
}
export const ActionIcon: React.FC<ActionIconProps> = ({
  size = 'md',
  variant = 'filled',
  children,
  icon,
  onClick,
  ...props
}) => {
  const { colorScheme } = useColorScheme();
  const renderIcon = () => {
    if (!icon) return null;
    const iconSize =
      size === 'xs' ? 18 : size === 'sm' || size === 'md' ? 20 : 24;
    return <Icon name={icon} size={iconSize} color="inherit" />;
  };

  return (
    <Btn
      onClick={onClick}
      {...props}
      className={clsx([
        actionIconStyle,
        actionIconSizes[size],
        actionIconVariants[variant],
        colorScheme === ColorSchemeEnum.Dark
          ? actionIconDarkVariants[variant]
          : actionIconLightVariants[variant],
      ])}
    >
      {renderIcon()}
    </Btn>
  );
};

ActionIcon.displayName = 'ActionIcon';
