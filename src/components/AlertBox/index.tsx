import React from 'react';
import { useColorScheme } from '@/providers';
import clsx from 'clsx';
import {
  alertBoxButtonWrapperStyle,
  alertBoxDescriptionStyle,
  alertBoxGlobalWrapperColorSchemeVariantStyle,
  alertBoxGlobalWrapperStyle,
  alertBoxIconWrapperBaseStyle,
  alertBoxIconWrapperVariantStyle,
  alertBoxTitleStyle,
  alertBoxWrapperBaseStyle,
  alertBoxWrapperContentBaseStyle,
  alertBoxWrapperTextBaseStyle,
  alertBoxWrapperTextColorSchemeVariantStyle,
  alertBoxWrapperVariantStyle,
} from './alertBox.css';
import { Icon } from '../Icon';
import { SymbolCodepoints } from '@/core/icons/types';
import { Button } from '../Button';
import ReactDOM from 'react-dom';

export type AlertBoxProps = {
  title: string;
  opened: boolean;
  onClose: () => void;
  description?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  width?: string | number;
  buttons?: {
    leftButton?: {
      label?: string;
      onClick?: () => void;
      variant?: 'filled' | 'outline' | 'subtle';
    };
    rightButton?: {
      label?: string;
      onClick?: () => void;
      variant?: 'filled' | 'outline' | 'subtle';
    };
  };
};

export const AlertBox: React.FC<AlertBoxProps> = ({
  title,
  description,
  type = 'info',
  width = 'auto',
  buttons,
  onClose,
  opened = false,
}) => {
  const { colorScheme } = useColorScheme();

  const mode = 'dark';

  const alertBoxIcon: Record<string, SymbolCodepoints> = {
    success: 'check_circle',
    error: 'cancel',
    warning: 'info',
    info: 'info',
  };
  if (!opened) return null;

  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className={clsx(
          alertBoxGlobalWrapperStyle,
          alertBoxGlobalWrapperColorSchemeVariantStyle[mode],
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width,
          }}
          className={clsx(
            alertBoxWrapperBaseStyle,
            alertBoxWrapperVariantStyle[mode],
          )}
        >
          <div className={clsx(alertBoxWrapperContentBaseStyle)}>
            <div
              className={clsx(
                alertBoxIconWrapperBaseStyle,
                alertBoxIconWrapperVariantStyle[type][mode],
              )}
            >
              <Icon name={alertBoxIcon[type]} size={36} color="inherit" />
            </div>

            <div
              className={clsx(
                alertBoxWrapperTextBaseStyle,
                alertBoxWrapperTextColorSchemeVariantStyle[mode],
              )}
            >
              <span className={clsx(alertBoxTitleStyle)}>{title}</span>
              {description && (
                <span className={clsx(alertBoxDescriptionStyle)}>
                  {description}
                </span>
              )}
            </div>
          </div>
          <div className={clsx(alertBoxButtonWrapperStyle)}>
            <Button
              grow
              size="sm"
              variant={buttons?.leftButton?.variant || 'subtle'}
              onClick={
                buttons?.leftButton?.onClick
                  ? buttons.leftButton.onClick
                  : () => {
                      onClose();
                    }
              }
            >
              {buttons?.leftButton?.label || 'Cancelar'}
            </Button>

            <Button
              grow
              size="sm"
              variant={buttons?.rightButton?.variant || 'filled'}
              onClick={
                buttons?.rightButton?.onClick
                  ? buttons.rightButton.onClick
                  : () => {}
              }
            >
              {buttons?.rightButton?.label || 'Confirmar'}
            </Button>
          </div>
        </div>
      </div>,
      document.body,
    );
  } else {
    return null;
  }
};
