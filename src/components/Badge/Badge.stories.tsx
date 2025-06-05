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
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Badge variant="error" number={1} />
      <Badge variant="warning" number={1} />
      <Badge variant="info" number={1} />
      <Badge variant="success" number={1} />
      <Badge variant="disabled" number={1} />
    </div>
  ),
};

export const WithoutNumber: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Badge variant="error" />
      <Badge variant="warning" />
      <Badge variant="info" />
      <Badge variant="success" />
      <Badge variant="disabled" />
    </div>
  ),
};
