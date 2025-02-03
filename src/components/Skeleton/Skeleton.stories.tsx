import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Skeleton } from '.';
import React from 'react';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 8,
        backgroundColor: 'lightgray',
      }}
    >
      <Skeleton />
    </div>
  ),
};

export const CustomWidthAndHeight: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 8,
        backgroundColor: 'lightgray',
      }}
    >
      <Skeleton width={100} height={100} />
    </div>
  ),
};
