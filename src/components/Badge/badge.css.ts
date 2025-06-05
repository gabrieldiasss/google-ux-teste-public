import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const badgeStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutrals.light[50],
  fontSize: theme.fontSizes.xxxs,
  borderRadius: '50%',
  fontFamily: theme.fontFamily.default,
  ':disabled': {
    background: theme.colors.neutralsOverlay.light[400],
  },
  fontWeight: 'bold',
});

export const badgeState = styleVariants({
  numberOn: {
    width: 22,
    height: 22,
  },
  numberOff: {
    width: 8,
    height: 8,
  },
});

export const badgeColors = styleVariants({
  error: {
    background: theme.colors.danger[600],
  },
  warning: {
    background: theme.colors.warning[600],
  },
  info: {
    background: theme.colors.info[600],
  },
  success: {
    background: theme.colors.success[700],
  },
  disabled: {
    background: theme.colors.neutralsOverlay.dark[300],
  },
});
