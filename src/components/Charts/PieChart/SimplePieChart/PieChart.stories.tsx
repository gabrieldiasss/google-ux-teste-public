import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SimplePieChart } from '.';

const meta: Meta<typeof SimplePieChart> = {
  title: 'Components/Charts/PieChart',
  component: SimplePieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimplePieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
    ];

    const COLORS = ['#E84910', '#FBB076', '#F8833F'];

    return (
      <div style={{ width: '300px', height: '400px' }}>
        <SimplePieChart
          data={data}
          header={{ title: 'Título 2', subtitle: 'Descrição 2' }}
          colors={COLORS}
        />
      </div>
    );
  },
};
