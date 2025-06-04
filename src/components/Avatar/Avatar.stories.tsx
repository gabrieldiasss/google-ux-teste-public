import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';
import { StoryWrapper } from '../StoryWrapper';
import React from 'react';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../providers/ColorSchemeProvider';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const { colorScheme } = useColorScheme();

      return (
        <ColorSchemeProvider defaultColorScheme={colorScheme}>
          <StoryWrapper>
            <Story />
          </StoryWrapper>
        </ColorSchemeProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Avatar size="xs" label="XS" />
        <Avatar size="sm" label="SM" />
        <Avatar size="md" label="MD" />
        <Avatar size="lg" label="LG" />
        <Avatar size="xl" label="XL" />
      </>
    );
  },
};

export const Notification: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar size="xs" label="XS" hasNotification />
      <Avatar size="sm" label="SM" hasNotification />
      <Avatar size="md" label="MD" hasNotification />
      <Avatar size="lg" label="LG" hasNotification />
      <Avatar size="xl" label="XL" hasNotification />
    </div>
  ),
};

export const Selected: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar
        size="xs"
        label="XS"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
      />
      <Avatar
        size="sm"
        label="SM"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
      />
      <Avatar
        size="md"
        label="MD"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
      />
      <Avatar
        size="lg"
        label="LG"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
      />
      <Avatar
        size="xl"
        label="XL"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
      />
    </div>
  ),
};

export const SelectedPlusRemove: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar
        size="xs"
        label="XS"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
        isRemove={true}
      />
      <Avatar
        size="sm"
        label="SM"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
        isRemove={true}
      />
      <Avatar
        size="md"
        label="MD"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
        isRemove={true}
      />
      <Avatar
        size="lg"
        label="LG"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
        isRemove={true}
      />
      <Avatar
        size="xl"
        label="XL"
        isSelected
        selectedCircleBgColor="#FFFFFF99"
        isRemove={true}
      />
    </div>
  ),
};

export const DefaultPlusRemove: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar size="xs" label="XS" isRemove={true} />
      <Avatar size="sm" label="SM" isRemove={true} />
      <Avatar size="md" label="MD" isRemove={true} />
      <Avatar size="lg" label="LG" isRemove={true} />
      <Avatar size="xl" label="XL" isRemove={true} />
    </div>
  ),
};
