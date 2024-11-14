import React from 'react';
import clsx from 'clsx';

import { badgeStyle, badgeColors, badgeState } from './badge.css';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeColors;
  number?: number;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  number,
}) => {
  return (
    <span
      className={clsx(
        badgeStyle,
        badgeState[
          number !== undefined && number !== null ? 'numberOn' : 'numberOff'
        ],
        badgeColors[variant],
      )}
    >
      {number}
    </span>
  );
};

Badge.displayName = 'Badge';
