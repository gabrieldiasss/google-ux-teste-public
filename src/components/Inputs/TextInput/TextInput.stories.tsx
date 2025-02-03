import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '.';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <TextInput value="1" onChange={(value) => console.log(value)} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <TextInput
        value="1"
        onChange={(value) => console.log(value)}
        label="TextInput Label"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <TextInput
        value=""
        onChange={(value) => console.log(value)}
        placeholder="TextInput Placeholder"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    return (
      <TextInput
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
      <TextInput value="1" onChange={(value) => console.log(value)} disabled />
    );
  },
};

export const Required: Story = {
  render: () => {
    return (
      <TextInput
        value=""
        onChange={(value) => console.log(value)}
        label="TextInput Label"
        required
      />
    );
  },
};

export const WithAsterisk: Story = {
  render: () => {
    return (
      <TextInput
        value=""
        onChange={(value) => console.log(value)}
        label="TextInput Label"
        withAsterisk
      />
    );
  },
};

export const WithWidth: Story = {
  render: () => {
    return (
      <TextInput
        value="1"
        onChange={(value) => console.log(value)}
        width={300}
      />
    );
  },
};
