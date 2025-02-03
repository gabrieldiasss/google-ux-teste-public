import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Logo } from '.';
import React from 'react';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Logo size="xs" />
      <Logo size="md" />
      <Logo size="xl" />
    </div>
  ),
};
