import React, { useState } from 'react';
import { PaginationButton } from '../PaginationButton';
import {
  paginationSetterColorSchemeStyle,
  paginationSetterInputColorSchemeStyle,
  paginationSetterInputStyle,
  paginationSetterTextStyle,
  paginationSetterWrapperStyle,
} from './paginationSetter.css';
import { useColorScheme } from '@/providers';
import clsx from 'clsx';
import { useIsMobile } from '@/core/hooks';
interface PaginationSetterProps {
  pageCurrent: number;
  totalPagesNumber: number;
  onPaginate: (page: number) => void;
}

export const PaginationSetter: React.FC<PaginationSetterProps> = ({
  pageCurrent,

  totalPagesNumber,
  onPaginate,
}) => {
  const { isMobile } = useIsMobile();
  const { colorScheme } = useColorScheme();
  const [newPage, setNewPage] = useState<number | string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      const value = parseInt(e.target.value);
      setNewPage(value);
    } else {
      setNewPage('');
    }
  };
  const handleSetPage = () => {
    if (
      newPage &&
      typeof newPage === 'number' &&
      newPage !== pageCurrent &&
      newPage > 0 &&
      newPage <= totalPagesNumber
    ) {
      onPaginate(newPage);
    } else {
      setNewPage('');
    }
  };
  return (
    <div
      className={paginationSetterWrapperStyle}
      style={isMobile ? { display: 'none' } : {}}
    >
      <span
        className={clsx(
          paginationSetterTextStyle,
          paginationSetterColorSchemeStyle[colorScheme],
        )}
      >
        Ir para página
      </span>
      <input
        value={newPage}
        type="number"
        min="1"
        max={totalPagesNumber}
        onChange={handleInputChange}
        className={clsx(
          paginationSetterInputStyle,
          paginationSetterInputColorSchemeStyle[colorScheme],
        )}
      />
      <PaginationButton
        iconName="keyboard_arrow_right"
        onClick={handleSetPage}
      />
    </div>
  );
};
