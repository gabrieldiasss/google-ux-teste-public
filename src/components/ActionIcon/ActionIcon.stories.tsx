import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ActionIcon } from '.';

const meta: Meta<typeof ActionIcon> = {
  title: 'Components/ActionIcon',
  component: ActionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onClick: fn() },
} satisfies Meta<typeof ActionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    icon: 'add',
    variant: 'filled',
  },
};

export const Outline: Story = {
  args: {
    icon: 'add',
    variant: 'outline',
  },
};

export const Subtle: Story = {
  args: {
    icon: 'add',
    variant: 'subtle',
  },
};

export const Light: Story = {
  args: {
    icon: 'add',
    variant: 'light',
  },
};

export const XS: Story = {
  args: {
    icon: 'add',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    icon: 'add',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    icon: 'add',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    icon: 'add',
    size: 'lg',
  },
};

export const WithNAI: Story = {
  args: {
    icon: 'add',
    isNAI: true,
  },
};
