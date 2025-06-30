import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadarChart } from '.';

const meta: Meta<typeof RadarChart> = {
  title: 'Components/Charts/RadarChart',
  component: RadarChart,
  parameters: {
    layout: 'centered',
  },
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
        fullMark: 150,
      },
      {
        subject: 'Chinese',
        indicator1: 98,
        indicator2: 130,
        indicator3: 115,
        fullMark: 150,
      },
      {
        subject: 'English',
        indicator1: 86,
        indicator2: 130,
        indicator3: 110,
        fullMark: 150,
      },
      {
        subject: 'Geography',
        indicator1: 99,
        indicator2: 100,
        indicator3: 85,
        fullMark: 150,
      },
      {
        subject: 'Physics',
        indicator1: 85,
        indicator2: 90,
        indicator3: 100,
        fullMark: 150,
      },
      {
        subject: 'History',
        indicator1: 65,
        indicator2: 85,
        indicator3: 90,
        fullMark: 150,
      },
    ];

    const indicators = [
      { name: 'indicator1', color: '#E84910' },
      { name: 'indicator2', color: '#F8833F' },
      { name: 'indicator3', color: '#2196F3' },
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
