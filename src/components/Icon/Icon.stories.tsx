import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Icon } from '.';
import React from 'react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Icon name="add" />,
};

export const CustomSize: Story = {
  render: () => <Icon name="add" size={32} />,
};

export const CustomColor: Story = {
  render: () => <Icon name="add" color="red" />,
};
