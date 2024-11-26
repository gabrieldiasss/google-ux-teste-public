import React from 'react';
import clsx from 'clsx';
import { useColorScheme } from '@/core/providers';
import { Icon } from '../Icon';
import { SymbolCodepoints } from '@/core/icons/types';
import {
  snackbarContainer,
  snackbarVariantWrapper,
  snackbarContent,
  snackbarTypeStylesLight,
  snackbarTypeStylesDark,
  snackbarInfoContent,
  snackbarIconContainer,
  snackbarIconWrapper,
  snackbarHeader,
  snackbarBody,
  snackbarComplementButton,
  snackbarCloseButton,
  snackbarIconVariantStyles,
  snackbarIconContainerVariantColorScheme,
  snackbarTitleVariantColorScheme,
  snackbarMessageVariantColorScheme,
} from './snackbar.css';

export interface SnackbarProps {
  id: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message?: string;
  duration?: number;
  onClose?: () => void;
  complementButton?: {
    label?: string;
    onClick?: () => void;
  };
}

export const Snackbar: React.FC<SnackbarProps & { onClose: () => void }> = ({
  type = 'info',
  title,
  message,
  complementButton,
  onClose,
}) => {
  const { colorScheme } = useColorScheme();
  const iconNames: Record<string, SymbolCodepoints> = {
    success: 'check',
    error: 'close',
    warning: 'info',
    info: 'info',
  };

  return (
    <div
      className={clsx(snackbarContainer, snackbarVariantWrapper[colorScheme])}
    >
      <div
        className={clsx(
          snackbarContent,
          colorScheme === 'light'
            ? snackbarTypeStylesLight[type]
            : snackbarTypeStylesDark[type],
        )}
      >
        <div className={snackbarHeader}>
          <div
            className={clsx(
              snackbarIconContainer,
              snackbarIconContainerVariantColorScheme[colorScheme],
            )}
          >
            <div
              className={clsx(
                snackbarIconWrapper,
                snackbarIconVariantStyles[type],
              )}
            >
              <Icon name={iconNames[type]} size={16} color="inherit" />
            </div>
          </div>

          <div className={snackbarInfoContent}>
            <div className={snackbarBody}>
              {title && (
                <div className={snackbarTitleVariantColorScheme[colorScheme]}>
                  {title}
                </div>
              )}
              {message && (
                <div className={snackbarMessageVariantColorScheme[colorScheme]}>
                  {message}
                </div>
              )}
            </div>
            {complementButton && (
              <button
                className={snackbarComplementButton}
                onClick={(e) => {
                  e.stopPropagation();
                  complementButton.onClick?.();
                }}
              >
                {complementButton.label}
              </button>
            )}
          </div>
        </div>
        <button
          className={snackbarCloseButton}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <Icon name="close" size={24} color="inherit" />
        </button>
      </div>
    </div>
  );
};

Snackbar.displayName = 'Snackbar';
