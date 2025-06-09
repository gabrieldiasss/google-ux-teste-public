import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarNAI } from '.';

const meta = {
  title: 'Components/AvatarNAI',
  component: AvatarNAI,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarNAI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <AvatarNAI size="sm" />
        <AvatarNAI size="md" />
        <AvatarNAI size="lg" />
      </>
    );
  },
};
