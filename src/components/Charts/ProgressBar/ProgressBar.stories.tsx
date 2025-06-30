import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '.';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../../StoryWrapper';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Charts/ProgressBar',
  component: ProgressBar,
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
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <ProgressBar percentage={20} size="lg" />;
  },
};
