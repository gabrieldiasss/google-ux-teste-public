import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const cardMetric = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  borderRadius: 12,
});

export const borderColorVariants = style({});

export const textColors = styleVariants({
  light: {
    color: theme.colors.neutrals.light[900],
    border: `2px solid ${theme.colors.neutrals.dark[800]}`,
  },
  dark: {
    color: theme.colors.neutrals.dark[900],
    border: `2px solid ${theme.colors.neutrals.light[800]}`,
  },
});

export const metrics = style({
  marginTop: 6,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
