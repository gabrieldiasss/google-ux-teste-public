import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',

    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',

    children: 'Button',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',

    children: 'Button',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Button',
  },
};

export const XS: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const withIcon: Story = {
  args: {
    iconProps: {
      icon: 'add',
      position: 'left',
    },
    children: 'Button',
  },
};
