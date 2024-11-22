import { theme } from '@/core/themes/default.css';
import { style } from '@vanilla-extract/css';

export const snackbarsWrapper = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 9999,
  padding: theme.spacing.xxs,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxs,
  pointerEvents: 'none',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
    },
  },
  transition: 'all 0.2s ease',
});
