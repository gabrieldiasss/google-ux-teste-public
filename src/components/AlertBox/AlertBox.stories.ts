import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AlertBox } from '.';

const meta = {
  title: 'Components/AlertBox',
  component: AlertBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: 'Info',
    description: 'This is an info alert box',
    type: 'info',
    opened: true,
    onClose: fn(),
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    description: 'This is a success alert box',
    type: 'success',
    opened: true,
    onClose: fn(),
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'This is a warning alert box',
    type: 'warning',
    opened: true,
    onClose: fn(),
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    description: 'This is an error alert box',
    type: 'error',
    opened: true,
    onClose: fn(),
  },
};
