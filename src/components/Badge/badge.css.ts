import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const badgeStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutrals.light[50],
  fontSize: theme.fontSizes.xxs,
  lineHeight: 1.5,
  borderRadius: '50%',
  fontFamily: theme.fontFamily.default,
  ':disabled': {
    background: theme.colors.neutralsOverlay.light[400],
  },
});

export const badgeState = styleVariants({
  numberOn: {
    paddingInline: theme.spacing.xxs,
    paddingBlock: theme.spacing.xxxs,
  },
  numberOff: {
    paddingInline: theme.spacing.xxxs,
    paddingBlock: theme.spacing.xxxs,
  },
});

export const badgeColors = styleVariants({
  primary: {
    background: theme.colors.secondary[900],
  },
  secondary: {
    background: theme.colors.primary[600],
  },
  error: {
    background: theme.colors.danger[600],
  },
  warning: {
    background: theme.colors.warning[400],
  },
  info: {
    background: theme.colors.info[500],
  },
  success: {
    background: theme.colors.success[500],
  },
});
