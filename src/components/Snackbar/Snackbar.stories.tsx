import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Snackbar } from '.';
import {
  SnackbarProvider,
  useSnackbar,
} from './../../providers/SnackbarProvider';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
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
              message: 'Snackbar message',
              duration: 5000,
              type: 'success',
            });
            addSnackbar({
              message: 'Snackbar message',
              duration: 5000,
              type: 'error',
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
