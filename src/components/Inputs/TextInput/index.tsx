import React from 'react';
import { Input } from '@headlessui/react';
import {
  textInputGlobalWrapperStyle,
  textInputWrapperStyle,
  textInputWrapperSizesStyles,
  textInputWrapperVariantStyles,
  textInputWrapperVariantColorsWithErrors,
  textInputStyle,
  textInputLabelErrorStyle,
  textInputLabelAsteriskStyle,
  textInputLabelStyle,
  textInputLabelVariantStyle,
  textInputWrapperVariantColorsWithSuccess,
  textInputDisabledWrapperStyle,
  textInputWrapperVariantColorsDisabled,
} from './textInput.css';
import { useColorScheme } from '@/providers';
import { SymbolCodepoints } from '@/core/icons/types';
import { Icon } from '@/components/Icon';
import clsx from 'clsx';

interface IconProps {
  position: 'left' | 'right';
  icon: SymbolCodepoints;
}

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'xs' | 'lg';
  iconProps?: IconProps;
  label?: string;
  error?: string;
  isSuccess?: boolean;
  withAsterisk?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  size = 'lg',
  iconProps,
  className,
  label,
  error,
  isSuccess,
  withAsterisk,
  ...props
}) => {
  const inputRef = React.useRef<HTMLDivElement>(null);

  const { colorScheme } = useColorScheme();
  const renderIcon = () => {
    if (iconProps?.icon) {
      return (
        <Icon
          name={isSuccess ? 'check_circle' : error ? 'error' : iconProps.icon}
          size={18}
          color="inherit"
        />
      );
    }
    return null;
  };
  const shouldRenderRightIcon =
    iconProps?.position === 'right' || error || isSuccess;

  return (
    <div className={clsx(textInputGlobalWrapperStyle)}>
      {label && (
        <span
          className={clsx(
            textInputLabelStyle,
            textInputLabelVariantStyle[colorScheme],
          )}
        >
          {label}
          {(withAsterisk || props.required) && (
            <b className={clsx(textInputLabelAsteriskStyle)}>*</b>
          )}
        </span>
      )}
      <div
        className={clsx(
          props.disabled
            ? textInputDisabledWrapperStyle
            : textInputWrapperStyle,

          textInputWrapperSizesStyles[size],
          props.disabled
            ? textInputWrapperVariantColorsDisabled[colorScheme]
            : isSuccess
              ? textInputWrapperVariantColorsWithSuccess[colorScheme]
              : error
                ? textInputWrapperVariantColorsWithErrors[colorScheme]
                : textInputWrapperVariantStyles[colorScheme],

          className,
        )}
        onClick={() => {
          inputRef?.current?.focus();
        }}
      >
        {iconProps?.position === 'left' && !error && !isSuccess && renderIcon()}
        <Input
          className={clsx(textInputStyle)}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          ref={inputRef}
          {...props}
        />
        {shouldRenderRightIcon && renderIcon()}
      </div>
      {error && <span className={clsx(textInputLabelErrorStyle)}>{error}</span>}
    </div>
  );
};

TextInput.displayName = 'TextInput';
