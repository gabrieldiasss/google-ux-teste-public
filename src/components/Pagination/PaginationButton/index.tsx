import { Icon } from '@/components/Icon';
import { SymbolCodepoints } from '@/core/icons/types';
import { Button as BTN } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import {
  paginationButtonColorSchemeStyle,
  paginationButtonStyle,
  paginationButtonTextStyle,
  paginationWithIconStyle,
} from './paginationButton.css';
import { useColorScheme } from '@/providers';

interface PaginationButtonProps {
  onClick: () => void;
  label?: string;
  iconName?: SymbolCodepoints;
  active?: boolean;
  disabled?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  label,
  iconName,
  active = false,
  disabled = false,
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <BTN
      autoFocus={false}
      disabled={disabled}
      className={clsx(
        paginationButtonStyle,
        paginationButtonTextStyle,
        paginationButtonColorSchemeStyle[colorScheme][
          active ? 'active' : 'inactive'
        ],
        iconName && paginationWithIconStyle,
      )}
      onClick={onClick}
    >
      {label && <p color="inherit">{label}</p>}
      {iconName && <Icon size={24} color="inherit" name={iconName} />}
    </BTN>
  );
};

PaginationButton.displayName = 'PaginationButton';
export { PaginationButton, PaginationButtonProps };
