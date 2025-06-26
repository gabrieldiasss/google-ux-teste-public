import React from 'react';

import {
  RadarChart as RadarChartRecharts,
  PolarGrid,
  PolarAngleAxis,
  Radar,
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
} from './RadalChart.css';
import { useColorScheme } from '@/providers';
import { clsx } from 'clsx';
import { theme } from '@/core/themes/default.css';

interface RadarChartProps {
  data: any[];
  header: { title: string; subtitle: string };
  indicators: { name: string; color: string }[];
}

export const RadarChart: React.FC<RadarChartProps> = ({
  data,
  header,
  indicators,
}) => {
  const { colorScheme } = useColorScheme();

  const textChartColor =
    colorScheme === 'light'
      ? theme.colors.neutrals.light[700]
      : theme.colors.neutrals.dark[700];

  const strokeAxisChartColor =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.dark[600]
      : theme.colors.neutralsOverlay.light[600];

  const backgroundTooltip =
    colorScheme === 'light'
      ? theme.colors.neutralsOverlay.light[900]
      : theme.colors.neutralsOverlay.dark[900];

  const maisumteste = data.reduce((acc, curr) => {
    indicators.forEach((indicator) => {
      acc[indicator.name] = (acc[indicator.name] || 0) + curr[indicator.name];
    });
    return acc;
  }, {});

  const menuRefs = indicators.map((info, index) => {
    const objectToArray = Object.values(maisumteste);

    return { ...info, value: objectToArray[index] };
  });

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

      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <RadarChartRecharts
          width={300}
          height={225}
          outerRadius="80%"
          data={data}
        >
          <PolarGrid stroke={theme.colors.neutrals.light[200]} />
          <PolarAngleAxis
            dataKey="subject"
            fontSize={10}
            fontWeight={700}
            tickLine={true}
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
          />
          {indicators.map((indicator) => (
            <Radar
              name={indicator.name}
              dataKey={indicator.name}
              stroke={indicator.color}
              fill={indicator.color}
              fillOpacity={0.05}
            />
          ))}
        </RadarChartRecharts>
      </div>

      <div className={lineVariant[colorScheme]} />

      <div className={indicatorChart}>
        {menuRefs.map((indicator) => (
          <div className={indicatorWithValue}>
            <div className={indicatorStyle}>
              <div
                className={circleIndicator}
                style={{
                  background: indicator.color,
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

RadarChart.displayName = 'RadarChart';
