import { style, styleVariants } from '@vanilla-extract/css';
import { theme, primaryShade } from '@/core/themes/default.css';

export const buttonStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.xxs,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  borderRadius: theme.borders.radius.lg,
  borderWidth: theme.borders.width.thin,
  height: 'max-content',
  fontWeight: theme.fontWeights.medium,
  fontFamily: theme.fontFamily.default,
});

export const buttonVariants = styleVariants({
  filled: {
    backgroundColor: theme.colors.primary[primaryShade],
    color: theme.colors.neutrals.light[50],
    border: 'solid transparent',

    ':hover': {
      backgroundColor: theme.colors.primary[400],
    },
    ':active': {
      backgroundColor: theme.colors.primary[600],
    },
  },

  outline: {
    backgroundColor: 'transparent',
    border: 'solid',
    color: theme.colors.primary[primaryShade],
    borderColor: theme.colors.primary[primaryShade],

    ':hover': {
      color: theme.colors.primary[400],
      borderColor: theme.colors.primary[400],
    },
    ':active': {
      color: theme.colors.primary[600],
      borderColor: theme.colors.primary[600],
    },
  },
  subtle: {
    backgroundColor: 'transparent',
    border: 'solid transparent',
    color: theme.colors.primary[primaryShade],

    ':hover': {
      color: theme.colors.primary[400],
    },
    ':active': {
      color: theme.colors.primary[600],
    },
  },
});

export const buttonDarkVariants = styleVariants({
  filled: {
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.neutrals.dark[700],
    },
  },
  outline: {
    ':disabled': {
      cursor: 'not-allowed',
      color: theme.colors.neutrals.dark[700],
      borderColor: theme.colors.neutrals.dark[700],
    },
  },
  subtle: {
    ':disabled': {
      cursor: 'not-allowed',
      color: theme.colors.neutrals.dark[700],
    },
  },
});

export const buttonLightVariants = styleVariants({
  filled: {
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.neutrals.light[300],
    },
  },
  outline: {
    ':disabled': {
      cursor: 'not-allowed',
      color: theme.colors.neutrals.light[300],
      borderColor: theme.colors.neutrals.light[300],
    },
  },
  subtle: {
    ':disabled': {
      cursor: 'not-allowed',
      color: theme.colors.neutrals.light[300],
    },
  },
});

export const buttonSizes = styleVariants({
  xs: {
    padding: `${theme.spacing['xxs']} ${theme.spacing['xs']}`,
    fontSize: theme.fontSizes.xs,
    gap: theme.spacing.xxxs,
  },
  sm: {
    padding: `${theme.spacing['xxs']} ${theme.spacing['xs']} `,
    fontSize: theme.fontSizes.sm,
    gap: theme.spacing.xxs,
  },
  md: {
    padding: `${theme.spacing['xs']} ${theme.spacing['s']}`,
    fontSize: theme.fontSizes.md,
    gap: theme.spacing.xxs,
  },
  lg: {
    padding: `${theme.spacing['s']} ${theme.spacing['m']}`,
    fontSize: theme.fontSizes.lg,
    gap: theme.spacing.xxs,
  },
});
