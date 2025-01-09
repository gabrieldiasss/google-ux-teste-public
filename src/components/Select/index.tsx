import React from 'react';
import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';

import { useColorScheme } from '@/providers';
import { Icon } from '@/components/Icon';
import {
  selectInputStyle,
  selectInputVariantColors,
  selectInputVariantColorsWithErrors,
  selectInputWrapperSizesStyles,
  selectLabelAsteriskStyle,
  selectLabelErrorStyle,
  selectLabelStyle,
  selectLabelVariantStyle,
  selectOptionStyle,
  selectOptionsWrapperStyleVariants,
  selectPlaceholderStyle,
  selectWrapperStyle,
} from './select.css';
import { primaryShade, theme, themeTokens } from '@/core/themes/default.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
  size?: 'xs' | 'lg';
  error?: string;
  required?: boolean;
  withAsterisk?: boolean;
  disabled?: boolean;
  className?: string;
  width?: string | number;
}

interface CustomButtonProps {
  options: Option[];
  value: string;
  placeholder?: string;
  error?: string;
  disabled: boolean;
  className?: string;
}

const CustomButton = ({
  options,
  value,
  placeholder,
  error,
  disabled,
  ...props
}: CustomButtonProps) => (
  <button {...props}>
    <span className={selectPlaceholderStyle}>
      {options.find((opt: Option) => opt.value === value)?.label || placeholder}
    </span>
    <Icon
      name="keyboard_arrow_down"
      size={18}
      color={
        error || disabled ? 'inherit' : themeTokens.colors.primary[primaryShade]
      }
    />
  </button>
);

CustomButton.displayName = 'CustomButton';

export const Select: React.FC<SelectProps> = ({
  options = [],
  value,
  placeholder,
  onChange,
  label,
  size = 'lg',
  error,
  withAsterisk,
  disabled = false,
  className,
  width = '100%',
  ...props
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <Field className={clsx(selectWrapperStyle)} style={{ width }}>
      <Label>
        {label && (
          <span
            className={clsx(
              selectLabelStyle,
              selectLabelVariantStyle[colorScheme],
            )}
          >
            {label}
            {(withAsterisk || props.required) && (
              <b className={clsx(selectLabelAsteriskStyle)}>*</b>
            )}
          </span>
        )}
      </Label>

      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <ListboxButton
          disabled={disabled}
          className={clsx(
            selectInputStyle,
            error
              ? selectInputVariantColorsWithErrors[colorScheme]
              : selectInputVariantColors[colorScheme],
            selectInputWrapperSizesStyles[size],
            className,
          )}
          as={CustomButton}
          options={options}
          value={value}
          placeholder={placeholder}
          error={error}
        />

        <ListboxOptions
          anchor={{ to: 'bottom start', gap: theme.spacing.xxs }}
          className={clsx(selectOptionsWrapperStyleVariants[colorScheme])}
          as="ul"
        >
          {options.map((option) => (
            <ListboxOption
              as="li"
              key={option.value}
              value={option.value}
              className={clsx(selectOptionStyle[colorScheme])}
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      {error && <span className={clsx(selectLabelErrorStyle)}>{error}</span>}
    </Field>
  );
};
