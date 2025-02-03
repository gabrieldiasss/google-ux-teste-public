import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';
import React from 'react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar size="xs" label="XS" />
      <Avatar size="sm" label="SM" />
      <Avatar size="md" label="MD" />
      <Avatar size="lg" label="LG" />
      <Avatar size="xl" label="XL" />
    </div>
  ),
};

export const SizesWithNotification: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar size="xs" label="XS" hasNotification />
      <Avatar size="sm" label="SM" hasNotification />
      <Avatar size="md" label="MD" hasNotification />
      <Avatar size="lg" label="LG" hasNotification />
      <Avatar size="xl" label="XL" hasNotification />
    </div>
  ),
};
