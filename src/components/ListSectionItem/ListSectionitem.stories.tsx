import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ListSectionItem } from '.';
import React from 'react';

const meta: Meta<typeof ListSectionItem> = {
  title: 'Components/ListSectionItem',
  component: ListSectionItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListSectionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ListSectionItem
      title="Title"
      description="Description"
      checkboxProps={{
        checked: false,
        onChange: fn(),
      }}
    />
  ),
};

export const Checked: Story = {
  render: () => (
    <ListSectionItem
      title="Title"
      description="Description"
      checkboxProps={{
        checked: true,
        onChange: fn(),
      }}
    />
  ),
};

export const NoDescription: Story = {
  render: () => (
    <ListSectionItem
      title="Title"
      checkboxProps={{
        checked: false,
        onChange: fn(),
      }}
    />
  ),
};
