import React, { forwardRef } from 'react';
import { theme } from '@/core/themes/default.css';

import {
  AreaChart as AreaChartRecharts,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
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
} from './AreaChart.css';
import { useColorScheme } from '@/providers';
import { clsx } from 'clsx';

interface AreaChartProps {
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

export const AreaChart = forwardRef<HTMLDivElement, AreaChartProps>(
  ({ data, header, lines }, ref) => {
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
        ? theme.colors.neutrals.dark[900]
        : theme.colors.neutrals.light[900];

    const boxShadowTooltip =
      colorScheme === 'light'
        ? `0 0 8px 4px ${theme.colors.neutralsOverlay.light[200]}`
        : `0 0 8px 4px ${theme.colors.neutralsOverlay.dark[200]}`;

    const toPercent = (decimal: number) => `${(decimal * 100).toFixed(1)}%`;

    return (
      <div
        ref={ref}
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
            {lines.map((line, index) => (
              <div key={index} className={indicator}>
                <div
                  className={circleIndicator}
                  style={{ background: line.color }}
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
            <AreaChartRecharts data={data} stackOffset="expand">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={strokeCartesianChartColor}
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
                axisLine={{ stroke: strokeAxisChartColor }}
                tickFormatter={toPercent}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: backgroundTooltip,
                  borderColor: backgroundTooltip,
                  borderRadius: '12px',
                  boxShadow: boxShadowTooltip,
                  color: textChartColor,
                }}
                wrapperStyle={{ borderRadius: 12 }}
                isAnimationActive={false}
                cursor={false}
              />
              {lines.map((line, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={line.indicator}
                  fill={line.color}
                  stroke={line.color}
                  style={{ borderRadius: 24 }}
                  stackId="1"
                />
              ))}
            </AreaChartRecharts>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
);

AreaChart.displayName = 'AreaChart';
