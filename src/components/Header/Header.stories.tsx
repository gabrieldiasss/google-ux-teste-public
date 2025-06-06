import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from '.';
import React from 'react';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../providers/ColorSchemeProvider';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { colorScheme } = useColorScheme();

      return (
        <ColorSchemeProvider defaultColorScheme={colorScheme}>
          <Story />
        </ColorSchemeProvider>
      );
    },
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Header
      actions={{
        actionLogout: () => {},
        actionNotification: () => {},
        actionProfile: () => {},
        actionWidget: () => {},
      }}
    />
  ),
};

export const LoggedIn: Story = {
  render: () => (
    <Header
      isLogged
      actions={{
        actionLogout: () => {},
        actionNotification: () => {},
        actionWidget: () => {},
      }}
    />
  ),
};

export const LoggedOut: Story = {
  render: () => (
    <Header
      isLogged={false}
      actions={{
        actionLogout: () => {},
        actionNotification: () => {},
        actionProfile: () => {},
        actionWidget: () => {},
      }}
    />
  ),
};
