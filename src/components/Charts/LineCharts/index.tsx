import React from 'react';
import { theme } from '@/core/themes/default.css';

import {
  LineChart as LineChartRecharts,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
} from './LineCharts.css';
import { useColorScheme } from '@/providers';
import { clsx } from 'clsx';

interface LineChartProps {
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

export const LineChart: React.FC<LineChartProps> = ({
  data,
  header,
  lines,
}) => {
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
          <LineChartRecharts data={data}>
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
            />
            {lines.map((line) => (
              <Line
                type="monotone"
                dataKey={line.indicator}
                stroke={line.color}
                activeDot={{ r: 6 }}
                fill={line.color}
                dot={{ enableBackground: 10 }}
              />
            ))}
          </LineChartRecharts>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

LineChart.displayName = 'LineChart';
