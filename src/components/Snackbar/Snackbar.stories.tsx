import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Snackbar } from '.';
import {
  SnackbarProvider,
  useSnackbar,
} from './../../providers/SnackbarProvider';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../../providers/ColorSchemeProvider';
import { StoryWrapper } from '../StoryWrapper';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  decorators: [
    (Story) => {
      const { colorScheme } = useColorScheme();

      return (
        <ColorSchemeProvider defaultColorScheme={colorScheme}>
          <SnackbarProvider>
            <StoryWrapper>
              <Story />
            </StoryWrapper>
          </SnackbarProvider>
        </ColorSchemeProvider>
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { addSnackbar } = useSnackbar();

    return (
      <SnackbarProvider>
        <Button
          onClick={() => {
            addSnackbar({
              title: 'This is message',
              message: 'Snackbar message',
              duration: 5000,
              type: 'success',
              complementButton: {
                label: 'Text button',
                position: 'right',
                onClick: () => {
                  console.log('Oi');
                },
              },
            });
            addSnackbar({
              message: 'Snackbar message',
              duration: 5000,
              type: 'error',
              complementButton: {
                label: 'Text button',
                position: 'bottom',
                onClick: () => {
                  console.log('Oi');
                },
              },
            });
            addSnackbar({
              message: 'Snackbar message',
              duration: 5000,
              type: 'info',
            });
            addSnackbar({
              message: 'Snackbar message',
              duration: 5000,
              type: 'warning',
            });
          }}
        >
          Add Multiple Snackbars
        </Button>
      </SnackbarProvider>
    );
  },
};
