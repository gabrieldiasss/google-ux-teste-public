import React from 'react';
import clsx from 'clsx';
import circleGradient from './../../assets/border-avatar.svg';
import {
  circleInnerStyle,
  avatarContentStyle,
  avatarSizes,
  circleOuterStyle,
  circleWrapperStyle,
  circleInnerPaddingSizes,
} from './avatar.css';
import { AvatarCircle } from './AvatarCircle';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  image?: string | null;
  hasNotification?: boolean;
  isSelected?: boolean;
  selectedCircleBgColor?: string;
  containsAvatar: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  label = '',
  image = null,
  hasNotification = false,
  isSelected = false,
  selectedCircleBgColor,
  containsAvatar,
}) => {
  const char = label?.trim()?.charAt(0)?.toUpperCase() || '';

  return (
    <div className={circleWrapperStyle}>
      {isSelected ? (
        <AvatarCircle
          circleStrokeColor={selectedCircleBgColor}
          aria-hidden="true"
          className={clsx(circleOuterStyle, avatarSizes[size])}
        />
      ) : hasNotification ? (
        <img
          src={circleGradient}
          alt="circle gradient"
          aria-hidden="true"
          className={clsx(circleOuterStyle, avatarSizes[size])}
        />
      ) : null}
      <div
        className={clsx(
          circleInnerStyle,
          circleInnerPaddingSizes[size],
          avatarSizes[size],
        )}
      >
        {containsAvatar ? (
          <LazyLoadImage
            src={image as string}
            effect="opacity"
            placeholderSrc={image as string}
            className={avatarContentStyle}
            alt="avatar"
          />
        ) : (
          <span className={avatarContentStyle}>{char}</span>
        )}
      </div>
    </div>
  );
};

Avatar.displayName = 'Avatar';
