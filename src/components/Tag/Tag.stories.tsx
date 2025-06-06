import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '.';
import React from 'react';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../StoryWrapper';

const meta: Meta<typeof Tag> = {
  // Update the type of meta
  title: 'Components/Tag',
  component: Tag,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Tag
        variant="success"
        label="Success"
        iconProps={{
          icon: 'check',
          position: 'left',
          onClick: () => console.log('clicked'),
        }}
      />
      <Tag variant="info" label="Info" />
      <Tag
        variant="warning"
        label="Warning"
        iconProps={{
          icon: 'close',
          position: 'right',
          onClick: () => console.log('clicked'),
        }}
      />
      <Tag
        variant="error"
        label="Error"
        iconProps={{
          icon: 'close',
          position: 'right',
        }}
      />
      <Tag variant="neutral" label="Neutral" />
      <Tag variant="outline" label="Outline" />
    </div>
  ),
};
