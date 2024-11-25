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
    if (visible) {
      document.addEventListener('keydown', handleKeyDown as any);
    } else {
      document.removeEventListener('keydown', handleKeyDown as any);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown as any);
    };
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
          {content}
          <div
            className={clsx(
              arrowBase,
              arrowVariants[position],
              tooltipVariantColorScheme[colorScheme],
            )}
          />
        </div>
      )}
    </div>
  );
};

export { Tooltip };
