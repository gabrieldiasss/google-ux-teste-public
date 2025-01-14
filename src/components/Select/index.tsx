import React, { forwardRef } from 'react';
import ReactSelect, { SelectInstance } from 'react-select';
import clsx from 'clsx';

import { useColorScheme } from '@/providers';
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
  selectWrapperStyle,
} from './select.css';
import { Icon } from '../Icon';
import { primaryShade, themeTokens } from '@/core/themes/default.css';

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
export const Select = forwardRef<SelectInstance<Option, false>, SelectProps>(
  (
    {
      onChange,
      options,
      value,
      className,
      disabled = false,
      error,
      label,
      placeholder,
      required,
      size = 'lg',
      width = '100%',
      withAsterisk,
    },
    ref,
  ) => {
    const { colorScheme } = useColorScheme();

    return (
      <div className={clsx(selectWrapperStyle)} style={{ width }}>
        {label && (
          <label
            className={clsx(
              selectLabelStyle,
              selectLabelVariantStyle[colorScheme],
            )}
          >
            {label}
            {withAsterisk && (
              <span className={selectLabelAsteriskStyle}>*</span>
            )}
          </label>
        )}
        <ReactSelect
          ref={ref}
          required={required}
          options={options}
          value={options.find((opt) => opt.value === value) || null}
          placeholder={placeholder || 'Selecione um item'}
          unstyled
          loadingMessage={() => 'Carregando...'}
          noOptionsMessage={() => 'Nenhum resultado encontrado'}
          onChange={(option: any) => onChange(option?.value)}
          isDisabled={disabled}
          classNamePrefix={'design-system-senai'}
          components={{
            DropdownIndicator: () => (
              <Icon
                name="keyboard_arrow_down"
                size={18}
                color={
                  error || disabled
                    ? 'inherit'
                    : themeTokens.colors.primary[primaryShade]
                }
              />
            ),
          }}
          classNames={{
            control: () =>
              clsx(
                selectInputStyle,
                error
                  ? selectInputVariantColorsWithErrors[colorScheme]
                  : selectInputVariantColors[colorScheme],
                selectInputWrapperSizesStyles[size],
                className,
              ),
            menu: () => clsx(selectOptionsWrapperStyleVariants[colorScheme]),
            option: () => clsx(selectOptionStyle[colorScheme]),
          }}
        />
        {error && <span className={clsx(selectLabelErrorStyle)}>{error}</span>}
      </div>
    );
  },
);
