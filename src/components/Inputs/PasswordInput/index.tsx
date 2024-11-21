import React, { useState } from 'react';
import { Input } from '@headlessui/react';
import {
  passwordInputGlobalWrapperStyle,
  passwordInputWrapperStyle,
  passwordInputWrapperSizesStyles,
  passwordInputWrapperVariantStyles,
  passwordInputWrapperVariantColorsWithErrors,
  passwordInputStyle,
  passwordInputLabelErrorStyle,
  passwordInputLabelAsteriskStyle,
  passwordInputLabelStyle,
  passwordInputLabelVariantStyle,
  passwordInputWrapperVariantColorsWithSuccess,
  passwordInputDisabledWrapperStyle,
  passwordInputWrapperVariantColorsDisabled,
  passwordInputShowOrHideButtonStyle,
} from './passwordInput.css';
import { useColorScheme } from '@/providers';
import { Icon } from '@/components/Icon';
import clsx from 'clsx';

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'xs' | 'lg';
  label?: string;
  error?: string;
  isSuccess?: boolean;
  withAsterisk?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  size = 'lg',
  className,
  label,
  error,
  isSuccess,
  withAsterisk,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { colorScheme } = useColorScheme();

  const toggleVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={clsx(passwordInputGlobalWrapperStyle)}>
      {label && (
        <span
          className={clsx(
            passwordInputLabelStyle,
            passwordInputLabelVariantStyle[colorScheme],
          )}
        >
          {label}
          {(withAsterisk || props.required) && (
            <b className={clsx(passwordInputLabelAsteriskStyle)}>*</b>
          )}
        </span>
      )}
      <div
        className={clsx(
          props.disabled
            ? passwordInputDisabledWrapperStyle
            : passwordInputWrapperStyle,

          passwordInputWrapperSizesStyles[size],
          props.disabled
            ? passwordInputWrapperVariantColorsDisabled[colorScheme]
            : isSuccess
              ? passwordInputWrapperVariantColorsWithSuccess[colorScheme]
              : error
                ? passwordInputWrapperVariantColorsWithErrors[colorScheme]
                : passwordInputWrapperVariantStyles[colorScheme],

          className,
        )}
        onClick={() => {
          inputRef?.current?.focus();
        }}
      >
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          className={clsx(passwordInputStyle)}
          ref={inputRef}
          {...props}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          aria-label={isPasswordVisible ? 'Esconder senha' : 'Mostrar senha'}
          className={clsx(passwordInputShowOrHideButtonStyle)}
        >
          <Icon
            name={isPasswordVisible ? 'visibility_off' : 'visibility'}
            size={18}
            color="inherit"
          />
        </button>
      </div>
      {error && (
        <span className={clsx(passwordInputLabelErrorStyle)}>{error}</span>
      )}
    </div>
  );
};
