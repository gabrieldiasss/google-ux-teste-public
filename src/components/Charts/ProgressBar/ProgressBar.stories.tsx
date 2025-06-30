import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '.';


const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Charts/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <ProgressBar percentage={20} size="lg" />;
  },
};
