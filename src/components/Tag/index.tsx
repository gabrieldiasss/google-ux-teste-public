import React from 'react';
import clsx from 'clsx';

import {
  tagStyle,
  tagLightColors,
  tagDarkColors,
  tagIconButton,
  tagIconButtonColorScheme,
} from './tag.css';
import { SymbolCodepoints } from './../../core/icons/types';
import { Icon } from '../Icon';
import { useColorScheme } from '@/providers';

type IconProps = {
  icon: SymbolCodepoints;
  position: 'right' | 'left';
  onClick?: () => void;
};
export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof tagDarkColors;
  iconProps?: IconProps;
  label: string;
}

export const Tag: React.FC<TagProps> = ({
  variant = 'info',
  iconProps,
  label,
}) => {
  const { colorScheme } = useColorScheme();
  const renderIcon = () => {
    if (!iconProps) return null;
    if (iconProps.onClick) {
      return (
        <button
          className={`${tagIconButton} ${tagIconButtonColorScheme[colorScheme]}`}
          onClick={iconProps.onClick}
        >
          <Icon name={iconProps?.icon} size={16} color="inherit" />
        </button>
      );
    }
    return <Icon name={iconProps?.icon} size={16} color="inherit" />;
  };

  return (
    <span
      className={clsx(
        tagStyle,
        colorScheme === 'dark'
          ? tagDarkColors[variant]
          : tagLightColors[variant],
      )}
    >
      {iconProps?.position === 'left' && renderIcon()}
      {label}
      {iconProps?.position === 'right' && renderIcon()}
    </span>
  );
};

Tag.displayName = 'Tag';
