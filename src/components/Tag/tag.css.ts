import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const tagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.xxxs,
  color: theme.colors.neutrals.light[50],

  borderColor: 'transparent',
  borderWidth: theme.borders.width.thin,
  borderStyle: 'solid',
  borderRadius: theme.borders.radius.md,

  paddingInline: theme.spacing.xxs,
  paddingBlock: theme.spacing.xxxs,

  lineHeight: 1.5,
  fontSize: theme.fontSizes.sm,
  fontFamily: theme.fontFamily.default,
  fontWeight: theme.fontWeights.normal,
});

const commonTagColors = {
  success: {
    background: theme.colors.success[100],
    color: theme.colors.success[800],
  },
  info: {
    background: theme.colors.info[100],
    color: theme.colors.info[800],
  },
  warning: {
    background: theme.colors.warning[100],
    color: theme.colors.warning[800],
  },
  error: {
    background: theme.colors.danger[100],
    color: theme.colors.danger[800],
  },
  neutral: {
    background: theme.colors.neutrals.light[200],
    color: theme.colors.neutrals.light[950],
  },
  outline: {
    background: 'transparent',
    borderColor: theme.colors.neutrals.light[600],
    color: theme.colors.neutrals.light[600],
  },
};

export const tagLightColors = styleVariants({
  ...commonTagColors,

  outline: {
    background: 'transparent',
    borderColor: theme.colors.neutrals.light[600],
    color: theme.colors.neutrals.light[600],
  },
});

export const tagDarkColors = styleVariants({
  ...commonTagColors,
});
