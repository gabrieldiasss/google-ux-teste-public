import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '.';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <TextArea value="1" onChange={(value) => console.log(value)} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <TextArea
        value="1"
        onChange={(value) => console.log(value)}
        label="TextArea Label"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <TextArea
        value=""
        onChange={(value) => console.log(value)}
        placeholder="TextArea Placeholder"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    return (
      <TextArea
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
      <TextArea value="1" onChange={(value) => console.log(value)} disabled />
    );
  },
};

export const Required: Story = {
  render: () => {
    return (
      <TextArea
        value=""
        onChange={(value) => console.log(value)}
        label="TextArea Label"
        required
      />
    );
  },
};

export const WithAsterisk: Story = {
  render: () => {
    return (
      <TextArea
        value=""
        onChange={(value) => console.log(value)}
        label="TextArea Label"
        withAsterisk
      />
    );
  },
};

export const WithWidth: Story = {
  render: () => {
    return <TextArea value="1" onChange={(value) => console.log(value)} />;
  },
};
