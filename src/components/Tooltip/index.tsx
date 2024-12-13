import React, { ReactNode, useState, useRef, useEffect } from 'react';
import {
  arrowBase,
  arrowVariants,
  positionVariants,
  tooltipBase,
  tooltipVariantColorScheme,
} from './tooltip.css';
import clsx from 'clsx';
import { useColorScheme } from '@/providers';
import arrowBlockDark from './../../assets/side-block-arrow-tooltip-dark.svg';
import arrowBlockLight from './../../assets/side-block-arrow-tooltip-light.svg';
import arrowInlineLight from './../../assets/side-inline-arrow-tooltip-light.svg';
import arrowInlineDark from './../../assets/side-inline-arrow-tooltip-dark.svg';
import arrowCenterDark from './../../assets/center-arrow-tooltip-dark.svg';
import arrowCenterLight from './../../assets/center-arrow-tooltip-light.svg';
import arrowInlineCenterLight from './../../assets/center-inline-arrow-tooltip-light.svg';
import arrowInlineCenterDark from './../../assets/center-inline-arrow-tooltip-dark.svg';

import { ColorSchemeEnum } from '@/utils';

type Position =
  | 'default'
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftCenter'
  | 'leftTop'
  | 'leftBottom'
  | 'rightCenter'
  | 'rightTop'
  | 'rightBottom';

interface TooltipProps {
  content: string;
  position?: Position;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'default',
  children,
}) => {
  const { colorScheme } = useColorScheme();
  const [visible, setVisible] = useState(false);
  const tooltipId = useRef(
    `tooltip-${Math.random().toString(36).substr(2, 9)}`,
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (visible) {
        document.addEventListener('keydown', handleKeyDown as any);
      } else {
        document.removeEventListener('keydown', handleKeyDown as any);
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown as any);
      };
    }
  }, [visible]);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {React.cloneElement(children as React.ReactElement, {
        'aria-describedby': visible ? tooltipId.current : undefined,
      })}

      {visible && (
        <div
          id={tooltipId.current}
          role="tooltip"
          aria-hidden={!visible}
          className={clsx(
            tooltipBase,
            positionVariants[position],
            tooltipVariantColorScheme[colorScheme],
          )}
        >
          <img
            src={
              ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'].includes(
                position,
              )
                ? colorScheme === ColorSchemeEnum.Dark
                  ? arrowBlockDark
                  : arrowBlockLight
                : ['rightTop', 'rightBottom', 'leftTop', 'leftBottom'].includes(
                      position,
                    )
                  ? colorScheme === ColorSchemeEnum.Dark
                    ? arrowInlineDark
                    : arrowInlineLight
                  : ['rightCenter', 'leftCenter'].includes(position)
                    ? colorScheme === ColorSchemeEnum.Dark
                      ? arrowInlineCenterDark
                      : arrowInlineCenterLight
                    : colorScheme === ColorSchemeEnum.Dark
                      ? arrowCenterDark
                      : arrowCenterLight
            }
            alt=""
            aria-hidden="true"
            className={clsx(arrowBase, arrowVariants[position])}
          />
          {content}
        </div>
      )}
    </div>
  );
};

export { Tooltip };
