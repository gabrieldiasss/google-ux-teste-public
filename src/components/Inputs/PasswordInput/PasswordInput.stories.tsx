import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from '.';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <PasswordInput value="1" onChange={(value) => console.log(value)} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <PasswordInput
        value="1"
        onChange={(value) => console.log(value)}
        label="PasswordInput Label"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <PasswordInput
        value=""
        onChange={(value) => console.log(value)}
        placeholder="PasswordInput Placeholder"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    return (
      <PasswordInput
        value=""
        onChange={(value) => console.log(value)}
        error="Error message"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <PasswordInput
        value="1"
        onChange={(value) => console.log(value)}
        disabled
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    return (
      <PasswordInput
        value=""
        onChange={(value) => console.log(value)}
        label="PasswordInput Label"
        required
      />
    );
  },
};

export const WithAsterisk: Story = {
  render: () => {
    return (
      <PasswordInput
        value=""
        onChange={(value) => console.log(value)}
        label="PasswordInput Label"
        withAsterisk
      />
    );
  },
};

export const WithWidth: Story = {
  render: () => {
    return (
      <PasswordInput
        value="1"
        onChange={(value) => console.log(value)}
        width={300}
      />
    );
  },
};
