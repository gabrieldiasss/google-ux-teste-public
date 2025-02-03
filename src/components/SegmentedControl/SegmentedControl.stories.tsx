import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SegmentedControl } from '.';
import React from 'react';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SegmentedControl
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
      activeValue="1"
    />
  ),
};

export const ActiveOption2: Story = {
  render: () => (
    <SegmentedControl
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
      activeValue="2"
    />
  ),
};
