import React from 'react';

import { PieChart as PieChartRecharts, Pie, Cell, Tooltip } from 'recharts';
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
} from './PaddingPieChart.css';
import { useColorScheme } from '@/providers';
import { clsx } from 'clsx';
import { theme } from '@/core/themes/default.css';

interface PaddingPieChartProps {
  data: any[];
  header: { title: string; subtitle: string };
  colors: string[];
}

export const PaddingPieChart: React.FC<PaddingPieChartProps> = ({
  data,
  header,
  colors,
}) => {
  const { colorScheme } = useColorScheme();

  const indicators = data.map((data, index) => ({
    ...data,
    color: colors[index],
  }));

  const textChartColor =
    colorScheme === 'light'
      ? theme.colors.neutrals.light[900]
      : theme.colors.neutrals.dark[900];

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
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            flex: '1 0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <PieChartRecharts data={data} width={200} height={200}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              label={false}
              innerRadius={50}
              paddingAngle={3}
              cornerRadius={4}
              outerRadius={80}
              strokeOpacity={0}
            >
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
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChartRecharts>
        </div>

        <div className={lineVariant[colorScheme]} />

        <div className={indicatorChart}>
          {indicators.map((indicator) => (
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
                {indicator.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PaddingPieChart.displayName = 'PaddingPieChart';
