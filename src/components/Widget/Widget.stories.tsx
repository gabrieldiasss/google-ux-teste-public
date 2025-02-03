import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Widget } from '.';
import React from 'react';

const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        width: '500px',
        backgroundColor: 'lightgray',
      }}
    >
      <Widget width={'80px'} height={'80px'} />
    </div>
  ),
} satisfies Story;
