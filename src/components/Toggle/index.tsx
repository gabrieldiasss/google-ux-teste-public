import React from 'react';
import clsx from 'clsx';
import {
  toggleInnerDisabledStyleStateVariantsLight,
  toggleInnerDisabledStyleStateVariantsDark,
  toggleInnerStyle,
  toggleInnerStyleSizesVariants,
  toggleInnerStyleStateVariantsLight,
  toggleInnerStyleStateVariantsDark,
  toggleOuterStyle,
  toggleOuterStyleSizesVariants,
  toggleOuterStyleStateVariantsDark,
  toggleOuterStyleStateVariantsLight,
} from './toggle.css';
import { useColorScheme } from '@/core/providers';

interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'lg';
  switched?: boolean;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  size = 'xs',
  switched = false,
  disabled = false,
  ...props
}) => {
  const { colorScheme } = useColorScheme();
  const switchedState = switched ? 'switched' : 'unswitched';

  const getInnerStyle = () => {
    if (disabled) {
      return colorScheme === 'dark'
        ? toggleInnerDisabledStyleStateVariantsDark[switchedState]
        : toggleInnerDisabledStyleStateVariantsLight[switchedState];
    }
    return colorScheme === 'dark'
      ? toggleInnerStyleStateVariantsDark[switchedState]
      : toggleInnerStyleStateVariantsLight[switchedState];
  };
  return (
    <button
      name="toggle-outer"
      {...props}
      disabled={disabled}
      className={clsx(
        toggleOuterStyle,
        toggleOuterStyleSizesVariants[size],
        colorScheme === 'dark'
          ? toggleOuterStyleStateVariantsDark[switchedState]
          : toggleOuterStyleStateVariantsLight[switchedState],
      )}
    >
      <div
        className={clsx(
          toggleInnerStyle,
          toggleInnerStyleSizesVariants[size],
          getInnerStyle(),
        )}
      />
    </button>
  );
};

Toggle.displayName = 'Toggle';
