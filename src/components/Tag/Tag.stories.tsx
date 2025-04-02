import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '.';
import React from 'react';

const meta: Meta<typeof Tag> = {
  // Update the type of meta
  title: 'Components/Tag',
  component: Tag,
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
      <Tag
        variant="success"
        label="Success"
        iconProps={{
          icon: 'check',
          position: 'left',
          onClick: () => console.log('clicked'),
        }}
      />
      <Tag variant="info" label="Info" />
      <Tag
        variant="warning"
        label="Warning"
        iconProps={{
          icon: 'close',
          position: 'right',
          onClick: () => console.log('clicked'),
        }}
      />
      <Tag
        variant="error"
        label="Error"
        iconProps={{
          icon: 'close',
          position: 'right',
        }}
      />
      <Tag variant="neutral" label="Neutral" />
      <Tag variant="outline" label="Outline" />
    </div>
  ),
};
