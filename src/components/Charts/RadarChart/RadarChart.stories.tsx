import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadarChart } from '.';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../../StoryWrapper';

const meta: Meta<typeof RadarChart> = {
  title: 'Components/Charts/RadarChart',
  component: RadarChart,
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
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      {
        subject: 'Math',
        indicator1: 120,
        indicator2: 110,
        indicator3: 95,
        indicator4: 105,
        indicator5: 130,
        indicator6: 115,
        indicator7: 125,
        indicator8: 100,
        indicator9: 90,
        indicator10: 140,
        indicator11: 135,
        indicator12: 145,
        fullMark: 150,
      },
      {
        subject: 'Chinese',
        indicator1: 98,
        indicator2: 130,
        indicator3: 115,
        indicator4: 90,
        indicator5: 125,
        indicator6: 105,
        indicator7: 95,
        indicator8: 110,
        indicator9: 85,
        indicator10: 120,
        indicator11: 130,
        indicator12: 125,
        fullMark: 150,
      },
      {
        subject: 'English',
        indicator1: 86,
        indicator2: 130,
        indicator3: 110,
        indicator4: 100,
        indicator5: 115,
        indicator6: 130,
        indicator7: 120,
        indicator8: 95,
        indicator9: 105,
        indicator10: 115,
        indicator11: 125,
        indicator12: 135,
        fullMark: 150,
      },
      {
        subject: 'Geography',
        indicator1: 99,
        indicator2: 100,
        indicator3: 85,
        indicator4: 125,
        indicator5: 120,
        indicator6: 135,
        indicator7: 110,
        indicator8: 130,
        indicator9: 115,
        indicator10: 100,
        indicator11: 95,
        indicator12: 105,
        fullMark: 150,
      },
      {
        subject: 'Physics',
        indicator1: 85,
        indicator2: 90,
        indicator3: 100,
        indicator4: 110,
        indicator5: 95,
        indicator6: 125,
        indicator7: 130,
        indicator8: 120,
        indicator9: 105,
        indicator10: 95,
        indicator11: 100,
        indicator12: 110,
        fullMark: 150,
      },
      {
        subject: 'History',
        indicator1: 65,
        indicator2: 85,
        indicator3: 90,
        indicator4: 100,
        indicator5: 110,
        indicator6: 120,
        indicator7: 115,
        indicator8: 105,
        indicator9: 95,
        indicator10: 125,
        indicator11: 130,
        indicator12: 140,
        fullMark: 150,
      },
    ];

    const indicators = [
      { name: 'indicator1', color: '#E84910' },
      { name: 'indicator2', color: '#F8833F' },
      { name: 'indicator3', color: '#4CAF50' },
      { name: 'indicator4', color: '#2196F3' },
      { name: 'indicator5', color: '#9C27B0' },
      { name: 'indicator6', color: '#FFEB3B' },
      { name: 'indicator7', color: '#00BCD4' },
      { name: 'indicator8', color: '#795548' },
      { name: 'indicator9', color: '#FF5722' },
      { name: 'indicator10', color: '#3F51B5' },
      { name: 'indicator11', color: '#8BC34A' },
      { name: 'indicator12', color: '#FFC107' },
    ];

    return (
      <div style={{ width: '300px', height: '400px' }}>
        <RadarChart
          data={data}
          header={{ title: 'Título 2', subtitle: 'Descrição 2' }}
          indicators={indicators}
        />
      </div>
    );
  },
};
