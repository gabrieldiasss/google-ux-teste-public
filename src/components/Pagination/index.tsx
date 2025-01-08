import React from 'react';
import { PaginationButton } from './PaginationButton';
import {
  paginationDotColorSchemeStyle,
  paginationButtonsWrapperStyle,
  paginationDotWrapperStyle,
  paginationWrapperStyle,
} from './pagination.css';
import clsx from 'clsx';
import { useColorScheme } from '@/providers';
import { PaginationSetter } from './PaginationSetter';
interface PaginationProps {
  totalPagesNumber: number;
  pageCurrent: number;
  onPaginate: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  pageCurrent,
  totalPagesNumber,
  onPaginate,
}): JSX.Element => {
  const { colorScheme } = useColorScheme();
  const handlePageChange = (page: number) => {
    if (page !== pageCurrent && page >= 1 && page <= totalPagesNumber) {
      onPaginate(page);
    }
  };

  const pages = Array.from(
    { length: totalPagesNumber },
    (_, index) => index + 1,
  );
  const isWithinRange = (
    pageNumber: number,
    start: number,
    end: number,
  ): boolean => pageNumber >= start && pageNumber <= end;

  const isFirstOrLastPage = (pageNumber: number, total: number): boolean =>
    pageNumber === 1 || pageNumber === total;

  const isWithinAdjacentRange = (
    pageNumber: number,
    currentPage: number,
    total: number,
  ): boolean =>
    currentPage === 1 || currentPage === total
      ? isWithinRange(pageNumber, currentPage - 3, currentPage + 3)
      : currentPage === 2 || currentPage === total - 1
        ? isWithinRange(pageNumber, currentPage - 2, currentPage + 2)
        : isWithinRange(pageNumber, currentPage - 1, currentPage + 1);

  const showingPages: number[] = pages.filter(
    (pageNumber: number) =>
      isFirstOrLastPage(pageNumber, totalPagesNumber) ||
      pageNumber === pageCurrent ||
      isWithinAdjacentRange(pageNumber, pageCurrent, totalPagesNumber),
  );

  return (
    <div className={paginationWrapperStyle}>
      <div className={paginationButtonsWrapperStyle}>
        <PaginationButton
          iconName="keyboard_arrow_left"
          disabled={pageCurrent === 1}
          onClick={() => handlePageChange(pageCurrent - 1)}
        />
        {showingPages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              <PaginationButton
                key={String(index) + String(page)}
                active={page === pageCurrent}
                label={page.toString()}
                onClick={() => handlePageChange(page)}
              />
              {showingPages[index + 1] != undefined &&
                !(showingPages[index + 1] === page + 1) && (
                  <span
                    className={clsx(
                      paginationDotWrapperStyle,
                      paginationDotColorSchemeStyle[colorScheme],
                    )}
                  >
                    ...
                  </span>
                )}
            </React.Fragment>
          );
        })}
        <PaginationButton
          iconName="keyboard_arrow_right"
          disabled={pageCurrent === totalPagesNumber}
          onClick={() => handlePageChange(pageCurrent + 1)}
        />
      </div>
      <PaginationSetter
        pageCurrent={pageCurrent}
        totalPagesNumber={totalPagesNumber}
        onPaginate={onPaginate}
      />
    </div>
  );
};
