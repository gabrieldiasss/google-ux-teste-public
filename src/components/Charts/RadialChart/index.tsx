import React from 'react';

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import {
  chartCardWrapper,
  chartStrokeChartWrapper,
  circleIndicator,
  headerChartCard,
  indicatorChart,
  indicatorStyle,
  indicatorWithValue,
  lineVariant,
  subtitleSize,
  textVariantSubtitle,
  textVariantTitle,
  titleChartCard,
  titleSize,
} from './RadialChart.css';
import { useColorScheme } from '@/providers';
import { clsx } from 'clsx';
import { theme } from '@/core/themes/default.css';

interface RadialChartProps {
  data: any[];
  header: { title: string; subtitle: string };
}

export const RadialChart: React.FC<RadialChartProps> = ({ data, header }) => {
  const { colorScheme } = useColorScheme();

  const textChartColor =
    colorScheme === 'light'
      ? theme.colors.neutrals.light[700]
      : theme.colors.neutrals.dark[700];

  const backgroundBarEmpty =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.dark[50]
      : theme.colors.neutralsOverlay.light[50];

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
          <strong className={clsx(titleSize, textVariantTitle[colorScheme])}>
            {header.title}
          </strong>
          <span
            className={clsx(subtitleSize, textVariantSubtitle[colorScheme])}
          >
            {header.subtitle}
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="65%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="45%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            min={15}
            background={{
              fill: backgroundBarEmpty,
            }}
            dataKey="value"
            cornerRadius={12}
            fill="#000000"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: backgroundTooltip,
              borderColor: backgroundTooltip,
              color: textChartColor,
              borderRadius: '12px',
              boxShadow: boxShadowTooltip,
            }}
            itemStyle={{ color: textChartColor }}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className={lineVariant[colorScheme]} />

      <div className={indicatorChart}>
        {data.map((indicator) => (
          <div className={indicatorWithValue}>
            <div className={indicatorStyle}>
              <div
                className={circleIndicator}
                style={{
                  background: indicator.fill,
                }}
              ></div>

              <div className={textVariantSubtitle[colorScheme]}>
                {indicator.name}
              </div>
            </div>

            <div className={textVariantSubtitle[colorScheme]}>
              {indicator.value as string}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

RadialChart.displayName = 'RadialChart';
