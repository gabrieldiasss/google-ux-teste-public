import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value="1"
        onChange={(value) => console.log(value)}
      />
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value="1"
        onChange={(value) => console.log(value)}
        label="Select Label"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value=""
        onChange={(value) => console.log(value)}
        placeholder="Select Placeholder"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    return (
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
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
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
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
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value=""
        onChange={(value) => console.log(value)}
        label="Select Label"
        required
      />
    );
  },
};

export const WithAsterisk: Story = {
  render: () => {
    return (
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value=""
        onChange={(value) => console.log(value)}
        label="Select Label"
        withAsterisk
      />
    );
  },
};

export const WithWidth: Story = {
  render: () => {
    return (
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value="1"
        onChange={(value) => console.log(value)}
        width={300}
      />
    );
  },
};
