import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NAIButton } from '.';
import React from 'react';

const meta: Meta<typeof NAIButton> = {
  title: 'Components/NAIButton',
  component: NAIButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NAIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        height: '30dvh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <NAIButton />
    </div>
  ),
} satisfies Story;
