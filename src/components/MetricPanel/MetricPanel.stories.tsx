import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MetricPanel } from '.';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../StoryWrapper';

const meta: Meta<typeof MetricPanel> = {
  title: 'Components/MetricPanel',
  component: MetricPanel,
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
} satisfies Meta<typeof MetricPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ width: '300px', height: '100px' }}>
        <MetricPanel
          percentage={50}
          period="ano"
          title="Vendas"
          value={100000}
          status="positive"
        />
      </div>
    );
  },
};
