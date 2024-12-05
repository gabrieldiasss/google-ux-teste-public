import React, { forwardRef } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import { SymbolCodepoints } from './../../core/icons/types';

export type IconProps = {
  name: SymbolCodepoints;
  fill?: boolean;
  grade?: number;
  size?: number;
  color?: CSSProperties['color'];
  className?: string;
  style?: CSSProperties;
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      fill = false,
      grade,
      size = 50,
      style: propStyle,
      color,
      className,
      ...props
    },
    ref,
  ): ReactElement => {
    const style: CSSProperties = {
      ...propStyle,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      fontSize: size,
      width: size,
      height: size,
      fontFamily: 'Material Symbols Rounded',
      fontVariationSettings: [
        fill && `"FILL" 1`,
        `"wght" 300`,
        grade && `"GRAD" ${grade}`,
        size && `"opsz" ${size}`,
      ]
        .filter(Boolean)
        .join(', '),
    };

    const validNames = new Set(Object.keys(SymbolCodepoints));
    if (!validNames.has(name)) return <span></span>;

    return (
      <span {...props} ref={ref} style={style} className={className}>
        {name}
      </span>
    );
  },
);

Icon.displayName = 'Icon';
