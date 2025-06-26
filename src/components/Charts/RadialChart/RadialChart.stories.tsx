import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadialChart } from '.';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../../StoryWrapper';

const meta: Meta<typeof RadialChart> = {
  title: 'Components/Charts/RadialChart',
  component: RadialChart,
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
} satisfies Meta<typeof RadialChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      {
        name: 'Grou A',
        value: 31.47,
        fill: '#BF340F',
      },
      {
        name: 'Group B',
        value: 26.69,
        fill: '#F5631A',
      },
      {
        name: 'Group C',
        value: 15.69,
        fill: '#FBB076',
      },
    ];

    return (
      <div style={{ width: '300px', height: '400px' }}>
        <RadialChart
          data={data}
          header={{ title: 'Título 2', subtitle: 'Descrição 2' }}
        />
      </div>
    );
  },
};
