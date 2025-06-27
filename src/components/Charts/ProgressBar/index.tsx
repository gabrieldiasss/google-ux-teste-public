import React from 'react';

import { useColorScheme } from '@/providers';
import { theme } from '@/core/themes/default.css';

interface ProgressBarProps {
  percentage: number;
  size: 'md' | 'lg';
}

interface CircleProps {
  colour: string;
  size: number;
  percentage: number;
}

const Circle = ({ colour, percentage, size }: CircleProps) => {
  const r = size / 2 - 10;
  const circ = 2 * Math.PI * r;
  const strokePercentage = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={size / 2}
      cy={size / 2}
      fill="transparent"
      stroke={strokePercentage !== circ ? colour : ''}
      strokeWidth={4}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePercentage : 0}
      stroke-linecap="round"
    />
  );
};

const Text = ({ percentage, size }: { percentage: number; size: number }) => {
  const { colorScheme } = useColorScheme();

  const textChartColor =
    colorScheme === 'light'
      ? theme.colors.neutrals.light[700]
      : theme.colors.neutrals.dark[700];

  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={size * 0.14}
      fontWeight={700}
      fill={textChartColor}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  size,
}) => {
  const { colorScheme } = useColorScheme();
  const circularSize = size === 'md' ? 56 : 66;

  const backgroundBarEmpty =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.dark[50]
      : theme.colors.neutralsOverlay.light[50];

  return (
    <svg width={circularSize} height={circularSize}>
      <g transform={`rotate(-90 ${circularSize / 2} ${circularSize / 2})`}>
        <Circle
          colour={backgroundBarEmpty}
          percentage={100}
          size={circularSize}
        />
        <Circle
          colour={theme.colors.primary[600]}
          percentage={percentage}
          size={circularSize}
        />
      </g>
      <Text percentage={percentage} size={circularSize} />
    </svg>
  );
};

ProgressBar.displayName = 'ProgressBar';
