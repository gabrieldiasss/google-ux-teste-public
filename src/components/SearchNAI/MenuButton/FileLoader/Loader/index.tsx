import clsx from 'clsx';
import React, { useEffect } from 'react';
import {
  canvasStyle,
  loaderPercentageColorSchemeStyle,
  loaderPercentageStyle,
  loaderWrapperStyle,
} from './loader.css';
import { useColorScheme } from '@/providers';
import { themeTokens } from '@/core/themes/default.css';
type LoaderProps = {
  percentage: number;
};
export const Loader: React.FC<LoaderProps> = ({ percentage }) => {
  const { colorScheme } = useColorScheme();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.getElementById('loader') as HTMLCanvasElement;
      addStroke({ canvas, percentage });
    }
  }, [percentage]);

  const addStroke = ({
    canvas,
    percentage,
    color = themeTokens.colors.primary[600],
  }: {
    canvas: HTMLCanvasElement;
    percentage: number;
    color?: string;
  }) => {
    const context = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 20;
    const startAngle = 1.5 * Math.PI;
    const endAngle = (percentage / 100) * Math.PI * 2 + startAngle;
    if (!context) return;

    context?.clearRect(0, 0, canvas.width, canvas.height);
    context?.beginPath();
    context?.arc(x, y, radius, startAngle, endAngle);
    context.lineWidth = 2;
    context.strokeStyle = color;
    context?.stroke();
  };

  return (
    <div className={clsx(loaderWrapperStyle)}>
      <span
        className={clsx(
          loaderPercentageStyle,
          loaderPercentageColorSchemeStyle[colorScheme],
        )}
      >
        {percentage}%
      </span>
      <canvas
        id="loader-filled"
        className={canvasStyle}
        width="50"
        height="50"
        ref={(canvas) => {
          if (canvas) {
            addStroke({
              canvas,
              percentage: 100,
              color: colorScheme === 'dark' ? '#343a42' : '#d3d6db',
            });
          }
        }}
      />
      <canvas id="loader" className={canvasStyle} width="50" height="50" />
    </div>
  );
};
