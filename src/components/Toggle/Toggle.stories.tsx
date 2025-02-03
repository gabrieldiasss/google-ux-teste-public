import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toggle } from '.';
import React from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toggle />,
};

export const Switched: Story = {
  render: () => <Toggle switched />,
};

export const Disabled: Story = {
  render: () => <Toggle disabled />,
};

export const DisabledSwitched: Story = {
  render: () => <Toggle disabled switched />,
};

export const Large: Story = {
  render: () => <Toggle size="lg" />,
};
