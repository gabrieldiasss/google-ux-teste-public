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
          width: '80dvw',
        }}
      >
        <NAIButton />
      </div>
  ),
} satisfies Story;
