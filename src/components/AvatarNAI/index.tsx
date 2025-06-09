import React from 'react';
import clsx from 'clsx';
import {
  circleInnerStyle,
  avatarContentStyle,
  avatarSizes,
  circleWrapperStyle,
  circleInnerPaddingSizes,
} from './avatarNAI.css';

import NAI from '../../assets/nai/nai.png';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const AvatarNAI: React.FC<AvatarProps> = ({ size = 'md' }) => {
  return (
    <div className={circleWrapperStyle}>
      <div
        className={clsx(
          circleInnerStyle,
          circleInnerPaddingSizes[size],
          avatarSizes[size],
        )}
      >
        <img src={NAI} className={avatarContentStyle} alt="NAI" />
      </div>
    </div>
  );
};

AvatarNAI.displayName = 'AvatarNAI';
