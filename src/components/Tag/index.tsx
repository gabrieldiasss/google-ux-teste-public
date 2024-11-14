import React from 'react';
import clsx from 'clsx';

import { tagStyle, tagColors } from './tag.css';
import { SymbolCodepoints } from './../../core/icons/types';
import { Icon } from '../Icon';

interface tagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof tagColors;
  iconProps?: {
    icon: SymbolCodepoints;
    position: 'right' | 'left';
  };
  label: string;
}

export const Tag: React.FC<tagProps> = ({
  variant = 'info',
  iconProps,
  label,
}) => {
  const renderIcon = () => {
    if (!iconProps) return null;
    return <Icon name={iconProps?.icon} size={16} color="inherit" />;
  };

  return (
    <span
      className={clsx(
        tagStyle,

        tagColors[variant],
      )}
    >
      {iconProps?.position === 'left' && renderIcon()}
      {label}
      {iconProps?.position === 'right' && renderIcon()}
    </span>
  );
};

Tag.displayName = 'Tag';
