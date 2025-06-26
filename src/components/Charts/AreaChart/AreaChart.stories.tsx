import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AreaChart } from '.';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../../StoryWrapper';

const meta: Meta<typeof AreaChart> = {
  title: 'Components/Charts/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const { colorScheme } = useColorScheme();

      return (
        <ColorSchemeProvider defaultColorScheme={colorScheme}>
          <StoryWrapper>
            <Story />
          </StoryWrapper>
        </ColorSchemeProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      {
        name: 'Page A',
        indicator1: 25000, // Entre 1000-3000 ou 30000-70000
        indicator2: 8500, // Acima de 8000 (máx. 10000)
        amt: 2400,
        indicator3: 3200,
      },
      {
        name: 'Page B',
        indicator1: 35000,
        indicator2: 9200,
        amt: 2210,
        indicator3: 1500,
      },
      {
        name: 'Page C',
        indicator1: 2800,
        indicator2: 9800,
        amt: 2290,
        indicator3: 4100,
      },
      {
        name: 'Page D',
        indicator1: 40000,
        indicator2: 8700,
        amt: 2000,
        indicator3: 4000,
      },
      {
        name: 'Page E',
        indicator1: 1500,
        indicator2: 8900,
        amt: 2181,
        indicator3: 1900,
      },
      {
        name: 'Page F',
        indicator1: 45000,
        indicator2: 9300,
        amt: 2500,
        indicator3: 3600,
      },
      {
        name: 'Page G',
        indicator1: 2000,
        indicator2: 8600,
        amt: 2100,
        indicator3: 2500,
      },
      {
        name: 'Page H',
        indicator1: 50000,
        indicator2: 9100,
        amt: 2700,
        indicator3: 3800,
      },
      {
        name: 'Page I',
        indicator1: 32000,
        indicator2: 9500,
        amt: 2300,
        indicator3: 4200,
      },
      {
        name: 'Page J',
        indicator1: 1800,
        indicator2: 8800,
        amt: 3100,
        indicator3: 3900,
      },
      {
        name: 'Page K',
        indicator1: 38000,
        indicator2: 9700,
        amt: 2900,
        indicator3: 3300,
      },
      {
        name: 'Page L',
        indicator1: 2500,
        indicator2: 8400,
        amt: 2600,
        indicator3: 2700,
      },
      {
        name: 'Page M',
        indicator1: 60000,
        indicator2: 9900,
        amt: 3300,
        indicator3: 4400,
      },
      {
        name: 'Page N',
        indicator1: 2900,
        indicator2: 9400,
        amt: 2800,
        indicator3: 3100,
      },
      {
        name: 'Page O',
        indicator1: 42000,
        indicator2: 8100,
        amt: 3200,
        indicator3: 2900,
      },
      {
        name: 'Page P',
        indicator1: 1200,
        indicator2: 8200,
        amt: 3500,
        indicator3: 3700,
      },
      {
        name: 'Page Q',
        indicator1: 55000,
        indicator2: 9600,
        amt: 3400,
        indicator3: 3500,
      },
      {
        name: 'Page R',
        indicator1: 2700,
        indicator2: 8300,
        amt: 3600,
        indicator3: 4100,
      },
      {
        name: 'Page S',
        indicator1: 48000,
        indicator2: 10000,
        amt: 3700,
        indicator3: 4800,
      },
      {
        name: 'Page T',
        indicator1: 3200,
        indicator2: 8950,
        amt: 3800,
        indicator3: 4000,
      },
      {
        name: 'Page U',
        indicator1: 65000,
        indicator2: 9150,
        amt: 3900,
        indicator3: 4500,
      },
      {
        name: 'Page V',
        indicator1: 2200,
        indicator2: 9250,
        amt: 4000,
        indicator3: 4700,
      },
      {
        name: 'Page W',
        indicator1: 52000,
        indicator2: 8750,
        amt: 4100,
        indicator3: 4300,
      },
      {
        name: 'Page X',
        indicator1: 1900,
        indicator2: 9850,
        amt: 4200,
        indicator3: 4600,
      },
      {
        name: 'Page Y',
        indicator1: 70000,
        indicator2: 9050,
        amt: 4300,
        indicator3: 4900,
      },
      {
        name: 'Page Z',
        indicator1: 31000,
        indicator2: 9450,
        amt: 4400,
        indicator3: 5000,
      },
    ];

    const lines = [
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
      <div style={{ width: '90vw', height: '400px' }}>
        <AreaChart
          data={data}
          header={{ title: 'Título', subtitle: 'Descrição ' }}
          lines={lines}
        />
      </div>
    );
  },
};
