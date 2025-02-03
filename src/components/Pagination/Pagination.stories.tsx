import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Pagination } from '.';
import React from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination totalPagesNumber={10} pageCurrent={1} onPaginate={fn()} />
  ),
};

export const Middle: Story = {
  render: () => (
    <Pagination totalPagesNumber={10} pageCurrent={5} onPaginate={fn()} />
  ),
};

export const Last: Story = {
  render: () => (
    <Pagination totalPagesNumber={10} pageCurrent={10} onPaginate={fn()} />
  ),
};

export const First: Story = {
  render: () => (
    <Pagination totalPagesNumber={10} pageCurrent={1} onPaginate={fn()} />
  ),
};
