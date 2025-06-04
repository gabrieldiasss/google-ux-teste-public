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
  buttonRemoveStyle,
  containerStyle,
  buttonStyle,
  avatarButtonPosition,
  buttonBackgroundVariantOverlayStyle,
  buttonBackgroundVariantContainerStyle,
} from './avatar.css';
import { AvatarCircle } from './AvatarCircle';
import { Icon } from '../Icon';
import { useColorScheme } from '@/providers/ColorSchemeProvider';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  image?: string | null;
  hasNotification?: boolean;
  isSelected?: boolean;
  selectedCircleBgColor?: string;
  isRemove?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  label = '',
  image = null,
  hasNotification = false,
  isSelected = false,
  selectedCircleBgColor,
  isRemove,
}) => {
  const char = label?.trim()?.charAt(0)?.toUpperCase() || '';

  const { colorScheme } = useColorScheme();

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
        {isRemove && (
          <div className={clsx(buttonRemoveStyle, avatarButtonPosition[size])}>
            <div
              className={clsx(
                containerStyle,
                buttonBackgroundVariantOverlayStyle[colorScheme],
              )}
            >
              <div
                className={clsx(
                  buttonStyle,
                  buttonBackgroundVariantContainerStyle[colorScheme],
                )}
              >
                <Icon name="remove" size={18} color="#fffff" />
              </div>
            </div>
          </div>
        )}
        {!image ? (
          <span className={avatarContentStyle}>{char}</span>
        ) : (
          <img
            src={image}
            loading="lazy"
            className={avatarContentStyle}
            alt="avatar"
          />
        )}
      </div>
    </div>
  );
};

Avatar.displayName = 'Avatar';
