import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from '.';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Inputs/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <SearchInput value="1" onChange={(value) => console.log(value)} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <SearchInput
        value="1"
        onChange={(value) => console.log(value)}
        label="SearchInput Label"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <SearchInput
        value=""
        onChange={(value) => console.log(value)}
        placeholder="SearchInput Placeholder"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    return (
      <SearchInput
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
      <SearchInput
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
      <SearchInput
        value=""
        onChange={(value) => console.log(value)}
        label="SearchInput Label"
        required
      />
    );
  },
};

export const WithAsterisk: Story = {
  render: () => {
    return (
      <SearchInput
        value=""
        onChange={(value) => console.log(value)}
        label="SearchInput Label"
        withAsterisk
      />
    );
  },
};

export const WithWidth: Story = {
  render: () => {
    return (
      <SearchInput
        value="1"
        onChange={(value) => console.log(value)}
        width={300}
      />
    );
  },
};
