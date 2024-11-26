import React from 'react';
import clsx from 'clsx';
import circleGradient from './../../assets/border-avatar.svg';
import {
  circleInnerStyle,
  avatarContentStyle,
  avatarSizes,
  circleOuterStyle,
  circleWrapperStyle,
} from './avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'md' | 'xl';
  label?: string;
  image?: string | null;
  hasNotification?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  label = '',
  image = null,
  hasNotification = false,
}) => {
  const char = label?.trim()?.charAt(0)?.toUpperCase() || '';

  return (
    <div className={circleWrapperStyle}>
      {hasNotification && (
        <img
          src={circleGradient}
          alt="circle gradient"
          aria-hidden="true"
          className={clsx(circleOuterStyle, avatarSizes[size])}
        />
      )}
      <div className={clsx(circleInnerStyle, avatarSizes[size])}>
        {image ? (
          <img className={avatarContentStyle} src={image} alt="avatar" />
        ) : (
          <span className={avatarContentStyle}>{char}</span>
        )}
      </div>
    </div>
  );
};

Avatar.displayName = 'Avatar';
