import React from 'react';
import clsx from 'clsx';
import {
  toggleInnerDisabledStyleStateVariants,
  toggleInnerStyle,
  toggleInnerStyleSizesVariants,
  toggleInnerStyleStateVariants,
  toggleOuterStyle,
  toggleOuterStyleSizesVariants,
  toggleOuterStyleStateVariants,
} from './toggle.css';

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
  const switchedState = switched ? 'switched' : 'unswitched';
  return (
    <button
      name="toggle-outer"
      {...props}
      disabled={disabled}
      className={clsx(
        toggleOuterStyle,
        toggleOuterStyleSizesVariants[size],
        toggleOuterStyleStateVariants[switchedState],
      )}
    >
      <div
        className={clsx(
          toggleInnerStyle,
          toggleInnerStyleSizesVariants[size],
          disabled
            ? toggleInnerDisabledStyleStateVariants[switchedState]
            : toggleInnerStyleStateVariants[switchedState],
        )}
      />
    </button>
  );
};

Toggle.displayName = 'Toggle';
