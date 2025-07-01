import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BarChart } from '.';

const meta: Meta<typeof BarChart> = {
  title: 'Components/Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      {
        name: 'Page A',
        indicator1: 1000,
        indicator2: 2400,
        amt: 2400,
        indicator3: 3200,
      },
      {
        name: 'Page B',
        indicator1: 3000,
        indicator2: 1398,
        amt: 2210,
        indicator3: 1500,
      },
      {
        name: 'Page C',
        indicator1: 2000,
        indicator2: 9800,
        amt: 2290,
        indicator3: 4100,
      },
      {
        name: 'Page D',
        indicator1: 2780,
        indicator2: 3908,
        amt: 2000,
        indicator3: 2800,
      },
      {
        name: 'Page E',
        indicator1: 1890,
        indicator2: 4800,
        amt: 2181,
        indicator3: 1900,
      },
      {
        name: 'Page F',
        indicator1: 2390,
        indicator2: 3800,
        amt: 2500,
        indicator3: 3600,
      },
      {
        name: 'Page G',
        indicator1: 3490,
        indicator2: 4300,
        amt: 2100,
        indicator3: 2500,
      },
      {
        name: 'Page H',
        indicator1: 4200,
        indicator2: 3100,
        amt: 2700,
        indicator3: 3800,
      },
      {
        name: 'Page I',
        indicator1: 3800,
        indicator2: 2900,
        amt: 2300,
        indicator3: 4200,
      },
      {
        name: 'Page J',
        indicator1: 5100,
        indicator2: 5100,
        amt: 3100,
        indicator3: 3900,
      },
      {
        name: 'Page K',
        indicator1: 2900,
        indicator2: 3700,
        amt: 2900,
        indicator3: 3300,
      },
      {
        name: 'Page L',
        indicator1: 3400,
        indicator2: 4200,
        amt: 2600,
        indicator3: 2700,
      },
      {
        name: 'Page M',
        indicator1: 4700,
        indicator2: 3500,
        amt: 3300,
        indicator3: 4400,
      },
      {
        name: 'Page N',
        indicator1: 3900,
        indicator2: 4600,
        amt: 2800,
        indicator3: 3100,
      },
      {
        name: 'Page O',
        indicator1: 3100,
        indicator2: 3300,
        amt: 3200,
        indicator3: 2900,
      },
      {
        name: 'Page P',
        indicator1: 4500,
        indicator2: 2700,
        amt: 3500,
        indicator3: 3700,
      },
      {
        name: 'Page Q',
        indicator1: 3600,
        indicator2: 4400,
        amt: 3400,
        indicator3: 3500,
      },
      {
        name: 'Page R',
        indicator1: 4300,
        indicator2: 3900,
        amt: 3600,
        indicator3: 4100,
      },
      {
        name: 'Page S',
        indicator1: 4900,
        indicator2: 5000,
        amt: 3700,
        indicator3: 4800,
      },
      {
        name: 'Page T',
        indicator1: 4100,
        indicator2: 3600,
        amt: 3800,
        indicator3: 4000,
      },
      {
        name: 'Page U',
        indicator1: 5300,
        indicator2: 4700,
        amt: 3900,
        indicator3: 4500,
      },
      {
        name: 'Page V',
        indicator1: 3700,
        indicator2: 4100,
        amt: 4000,
        indicator3: 4700,
      },
      {
        name: 'Page W',
        indicator1: 4400,
        indicator2: 4500,
        amt: 4100,
        indicator3: 4300,
      },
      {
        name: 'Page X',
        indicator1: 4800,
        indicator2: 4900,
        amt: 4200,
        indicator3: 4600,
      },
      {
        name: 'Page Y',
        indicator1: 5200,
        indicator2: 5200,
        amt: 4300,
        indicator3: 4900,
      },
      {
        name: 'Page Z',
        indicator1: 4600,
        indicator2: 4800,
        amt: 4400,
        indicator3: 5000,
      },
    ];

    const bars = [
      {
        color: '#E84910',
        indicator: 'indicator1',
      },
      {
        color: '#FBB076',
        indicator: 'indicator2',
      },
      {
        color: '#F8833F',
        indicator: 'indicator3',
      },
    ];

    return (
      <div style={{ width: '80vw', height: '400px' }}>
        <BarChart
          data={data}
          header={{ title: 'Título', subtitle: 'Descrição ' }}
          bars={bars}
        />
      </div>
    );
  },
};

export const Negatives: Story = {
  render: () => {
    const data = [
        { name: 'Page A', indicator1: 1000, indicator2: -2400 },
        { name: 'Page B', indicator1: 3000, indicator2: 1398 },
        { name: 'Page C', indicator1: 2000, indicator2: -9800 },
        { name: 'Page D', indicator1: 2780, indicator2: -3908 },
        { name: 'Page E', indicator1: 1890, indicator2: 4800 },
        { name: 'Page F', indicator1: 2390, indicator2: -3800 },
        { name: 'Page G', indicator1: 3490, indicator2: 4300 },
        { name: 'Page H', indicator1: 4200, indicator2: -3100 },
        { name: 'Page I', indicator1: 3800, indicator2: 2900 },
        { name: 'Page J', indicator1: 5100, indicator2: -5100 },
        { name: 'Page K', indicator1: 2900, indicator2: 3700 },
        { name: 'Page L', indicator1: 3400, indicator2: -4200 },
        { name: 'Page M', indicator1: 4700, indicator2: 3500 },
        { name: 'Page N', indicator1: 3900, indicator2: -4600 },
        { name: 'Page O', indicator1: 3100, indicator2: 3300 },
        { name: 'Page P', indicator1: 4500, indicator2: -2700 },
        { name: 'Page Q', indicator1: 3600, indicator2: 4400 },
        { name: 'Page R', indicator1: 4300, indicator2: -3900 },
        { name: 'Page S', indicator1: 4900, indicator2: 5000 },
        { name: 'Page T', indicator1: 4100, indicator2: -3600 },
        { name: 'Page U', indicator1: 5300, indicator2: 4700 },
        { name: 'Page V', indicator1: 3700, indicator2: -4100 },
        { name: 'Page W', indicator1: 4400, indicator2: 4500 },
        { name: 'Page X', indicator1: 4800, indicator2: -4900 },
        { name: 'Page Y', indicator1: 5200, indicator2: 5200 },
        { name: 'Page Z', indicator1: 4600, indicator2: -4800 },
    ];


    const bars = [
      {
        color: '#E84910',
        indicator: 'indicator1',
      },
      {
        color: '#FBB076',
        indicator: 'indicator2',
      },
    ];

    return (
      <div style={{ width: '80vw', height: '400px' }}>
        <BarChart
          data={data}
          header={{ title: 'Título', subtitle: 'Descrição ' }}
          bars={bars}
        />
      </div>
    );
  },
};
