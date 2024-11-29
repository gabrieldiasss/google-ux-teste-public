import { useColorScheme } from '@/providers';
import clsx from 'clsx';
import React from 'react';
import {
  checkboxInputStyle,
  checkboxLabelStyle,
  checkboxWrapperStyle,
  checkboxWrapperVariantStyles,
  checkboxIconStyle,
  checkboxWrapperDisabledStyle,
  checkboxLabelPositionVariantStyle,
} from './checkbox.css';
import { Icon } from '@/components/Icon';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: {
    text: string;
    position: 'left' | 'right';
  };
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled,
  ...props
}) => {
  const { colorScheme } = useColorScheme();

  const renderLabel = () => {
    if (label?.text) {
      return (
        <span
          className={clsx(
            checkboxLabelStyle,
            checkboxLabelPositionVariantStyle[label.position],
          )}
        >
          {label.text}
        </span>
      );
    }
    return null;
  };

  return (
    <label
      onClick={(event: React.MouseEvent<HTMLLabelElement>) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        if (props.onClick) {
          const inputElement = event.currentTarget.querySelector('input');
          if (inputElement) {
            const inputEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window,
            });
            inputElement.dispatchEvent(inputEvent);
          }
        }
      }}
      className={clsx(
        checkboxWrapperVariantStyles[colorScheme],
        disabled ? checkboxWrapperDisabledStyle : checkboxWrapperStyle,
      )}
    >
      {label?.position === 'right' && renderLabel()}
      <div style={{ position: 'relative' }}>
        <input
          type="checkbox"
          className={clsx(checkboxInputStyle)}
          checked={checked}
          disabled={disabled}
          {...props}
          aria-checked={checked}
        />
        {checked && (
          <span className={clsx(checkboxIconStyle)}>
            <Icon name="check" color="white" size={16} />
          </span>
        )}
      </div>
      {label?.position === 'left' && renderLabel()}
    </label>
  );
};
