import React from 'react';
import { snackbarTypeVariants, snackbarWrapperStyle } from './snackbar.css';
import clsx from 'clsx';

export interface SnackbarProps {
  id: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  duration?: number;
  message?: string;
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
  return (
    <div
      className={clsx(snackbarWrapperStyle, snackbarTypeVariants[type])}
      onClick={onClose}
    >
      {title && <div className="font-bold">{title}</div>}
      <div>{message}</div>
      {complementButton && (
        <button
          className="text-sm underline mt-2"
          onClick={(e) => {
            e.stopPropagation();
            complementButton.onClick?.();
          }}
        >
          {complementButton.label}
        </button>
      )}
    </div>
  );
};

Snackbar.displayName = 'Snackbar';
