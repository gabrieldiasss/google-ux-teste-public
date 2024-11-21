import React from 'react';
import { Textarea, TextareaProps } from '@headlessui/react';
import clsx from 'clsx';
import {
  textAreaInputStyle,
  textAreaLabelAsteriskStyle,
  textAreaLabelStyle,
  textAreaLabelVariantStyle,
  textAreaInputVariantColors,
  textAreaWrapperStyle,
  textAreaInputVariantColorsWithErrors,
  textAreaLabelErrorStyle,
} from './textArea.css';
import { useColorScheme } from '@/providers';
interface TextAreaProps extends TextareaProps {
  label?: string;
  error?: string;
  withAsterisk?: boolean;
}
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  withAsterisk,
  ...props
}) => {
  const { colorScheme } = useColorScheme();
  return (
    <div className={clsx(textAreaWrapperStyle)}>
      {label && (
        <span
          className={clsx(
            textAreaLabelStyle,
            textAreaLabelVariantStyle[colorScheme],
          )}
        >
          {label}
          {(withAsterisk || props.required) && (
            <b className={clsx(textAreaLabelAsteriskStyle)}>*</b>
          )}
        </span>
      )}
      <Textarea
        name="description"
        {...props}
        className={clsx(
          textAreaInputStyle,
          error
            ? textAreaInputVariantColorsWithErrors[colorScheme]
            : textAreaInputVariantColors[colorScheme],
        )}
      />
      {error && <span className={clsx(textAreaLabelErrorStyle)}>{error}</span>}
    </div>
  );
};
