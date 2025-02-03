import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from '.';
import React from 'react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Header />,
};
export const LoggedIn: Story = {
  render: () => <Header isLogged />,
};

export const LoggedOut: Story = {
  render: () => <Header isLogged={false} />,
};
