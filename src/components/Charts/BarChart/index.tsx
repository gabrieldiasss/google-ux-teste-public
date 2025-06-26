import React from 'react';
import { theme } from '@/core/themes/default.css';

import {
  BarChart as BarChartRecharts,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from 'recharts';
import {
  chartCardWrapper,
  chartStrokeChartWrapper,
  circleIndicator,
  headerChartCard,
  indicator,
  indicatorChart,
  textVariantSubtitle,
  textVariantTitle,
  titleChartCard,
} from './BarChart.css';
import { useColorScheme } from '@/providers';
import { clsx } from 'clsx';

interface BarChartProps {
  data: {
    name: string;
    indicator1: number;
    indicator2: number;
    amt: number;
    indicator3: number;
  }[];
  header: { title: string; subtitle: string };
  lines: {
    color: string;
    indicator: string;
  }[];
}

export const BarChart: React.FC<BarChartProps> = ({ data, header, lines }) => {
  const { colorScheme } = useColorScheme();

  const textChartColor =
    colorScheme === 'light'
      ? theme.colors.neutrals.light[900]
      : theme.colors.neutrals.dark[900];

  const strokeAxisChartColor =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.dark[600]
      : theme.colors.neutralsOverlay.light[600];

  const strokeCartesianChartColor =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.dark[200]
      : theme.colors.neutralsOverlay.light[200];

  const backgroundTooltip =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.light[900]
      : theme.colors.neutralsOverlay.dark[900];

  const boxShadowTooltip =
    colorScheme === 'light'
      ? `0 0 8px 4px ${theme.colors.neutralsOverlay.light[200]}`
      : `0 0 8px 4px ${theme.colors.neutralsOverlay.dark[200]}`;

  return (
    <div
      className={clsx(chartCardWrapper, chartStrokeChartWrapper[colorScheme])}
    >
      <div className={headerChartCard}>
        <div className={titleChartCard}>
          <strong className={textVariantTitle[colorScheme]}>
            {header.title}
          </strong>
          <span className={textVariantSubtitle[colorScheme]}>
            {header.subtitle}
          </span>
        </div>

        <div className={indicatorChart}>
          {lines.map((line) => (
            <div className={indicator}>
              <div
                className={circleIndicator}
                style={{
                  background: line.color,
                }}
              ></div>
              <div className={textVariantSubtitle[colorScheme]}>
                {line.indicator}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: '100%', height: '80%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChartRecharts data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={strokeCartesianChartColor}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={8}
              tick={{ fill: textChartColor }}
              axisLine={{ stroke: strokeAxisChartColor }}
            />
            <YAxis
              tickLine={false}
              fontSize={14}
              tick={{ fill: textChartColor }}
              domain={['dataMin - 1000', 'dataMax + 1000']}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: backgroundTooltip,
                borderColor: backgroundTooltip,
                color: textChartColor,
                borderRadius: '12px',
                boxShadow: boxShadowTooltip,
              }}
              wrapperStyle={{ borderRadius: 12 }}
              isAnimationActive={false}
              cursor={false}
            />
            {lines.map((line) => (
              <Bar
                type="monotone"
                dataKey={line.indicator}
                fill={line.color}
                style={{ borderRadius: 24 }}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChartRecharts>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

BarChart.displayName = 'BarChart';
