import React from 'react';
import clsx from 'clsx';

import { tagStyle, tagLightColors, tagDarkColors } from './tag.css';
import { SymbolCodepoints } from './../../core/icons/types';
import { Icon } from '../Icon';
import { useColorScheme } from '@/core/providers';

type IconProps = {
  icon: SymbolCodepoints;
  position: 'right' | 'left';
};
interface tagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof tagDarkColors;
  iconProps?: IconProps;
  label: string;
}

export const Tag: React.FC<tagProps> = ({
  variant = 'info',
  iconProps,
  label,
}) => {
  const { colorScheme } = useColorScheme();
  const renderIcon = () => {
    if (!iconProps) return null;
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
