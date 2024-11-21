import React from 'react';
import clsx from 'clsx';
import { Button as Btn } from '@headlessui/react';
import {
  buttonSegmentedStyle,
  buttonStyleStateVariantsDark,
  buttonStyleStateVariantsLight,
  segmentedWrapper,
  segmentedWrapperStateVariants,
} from './segmentedControl.css';
import { Icon } from '@/components/Icon';
import { SymbolCodepoints } from './../../core/icons/types';
import { useColorScheme } from '@/providers';
export interface SegmentedControlItem {
  label: string;
  value: string;
  iconProps?: {
    icon: SymbolCodepoints;
    position: 'left' | 'right';
  };
  onClick?: () => void;
}
interface SegmentedControlProps {
  options: SegmentedControlItem[];
  activeValue?: string;
}
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  activeValue,
}) => {
  const { colorScheme } = useColorScheme();
  const renderOptions = () => {
    return options?.map(({ label, iconProps, onClick, value }, key) => {
      const renderIcon = () => {
        if (!iconProps?.icon) return null;
        const iconSize = 18;
        return <Icon name={iconProps.icon} size={iconSize} color="inherit" />;
      };
      const buttonState = activeValue === value ? 'active' : 'inactive';
      return (
        <Btn
          key={key}
          className={clsx([
            buttonSegmentedStyle,
            colorScheme === 'dark'
              ? buttonStyleStateVariantsDark[buttonState]
              : buttonStyleStateVariantsLight[buttonState],
          ])}
          onClick={onClick}
        >
          {iconProps?.position === 'left' && renderIcon()}
          {label}
          {iconProps?.position === 'right' && renderIcon()}
        </Btn>
      );
    });
  };
  return (
    <div
      className={clsx(
        segmentedWrapper,
        segmentedWrapperStateVariants[colorScheme],
      )}
    >
      {renderOptions()}
    </div>
  );
};

SegmentedControl.displayName = 'SegmentedControl';
