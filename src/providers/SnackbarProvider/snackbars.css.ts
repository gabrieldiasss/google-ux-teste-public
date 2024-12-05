import { theme, themeTokens } from '@/core/themes/default.css';
import { style } from '@vanilla-extract/css';

export const snackbarsWrapper = style({
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 9999,
  padding: theme.spacing.xxs,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxs,
  transition: 'all 0.2s ease',
  width: '100%',
  maxWidth: 400,
  '@media': {
    [`screen and (max-width: ${themeTokens.breakpoints.sm})`]: {
      maxWidth: 293,
    },
  },
});
