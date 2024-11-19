import React from 'react';
import { useColorScheme } from '@/providers';
import { widgetBaseStyle, widgetVariantStyle } from './widget.css';
import clsx from 'clsx';

interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export const Widget: React.FC<WidgetProps> = ({
  width = '100%',
  height = '100%',
  ...props
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <div
      className={clsx(widgetBaseStyle, widgetVariantStyle[colorScheme])}
      {...props}
      style={{ ...props.style, width, height }}
    />
  );
};
