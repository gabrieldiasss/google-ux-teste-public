import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';
import React from 'react';

const meta: Meta<typeof Badge> = {
  // Update the type of meta
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Badge variant="primary" number={1} />
      <Badge variant="secondary" number={2} />
      <Badge variant="error" number={3} />
      <Badge variant="warning" number={4} />
      <Badge variant="info" number={5} />
      <Badge variant="success" number={6} />
    </div>
  ),
};

export const WithoutNumber: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Badge variant="primary" />
      <Badge variant="secondary" />
      <Badge variant="error" />
      <Badge variant="warning" />
      <Badge variant="info" />
      <Badge variant="success" />
    </div>
  ),
};
