import { theme } from '@/core/themes/default.css';
import { style } from '@vanilla-extract/css';

export const fileLoaderCloseButtonStyle = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  border: 0,
  background: 'none',
  padding: theme.spacing.none,
  margin: theme.spacing.none,
  color: 'inherit',

  cursor: 'pointer',
});
