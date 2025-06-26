import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PaddingPieChartHalf } from '.';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../../../StoryWrapper';

const meta: Meta<typeof PaddingPieChartHalf> = {
  title: 'Components/Charts/PaddingPieChartHalf',
  component: PaddingPieChartHalf,
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
} satisfies Meta<typeof PaddingPieChartHalf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
    ];

    const COLORS = [
      '#E84910',
      '#FBB076',
      '#F8833F',
      '#E84910',
      '#FBB076',
      '#F8833F',
      '#E84910',
      '#FBB076',
      '#F8833F',
    ];

    return (
      <div style={{ width: '300px', height: '400px' }}>
        <PaddingPieChartHalf
          data={data}
          header={{ title: 'Título 2', subtitle: 'Descrição 2' }}
          colors={COLORS}
        />
      </div>
    );
  },
};
