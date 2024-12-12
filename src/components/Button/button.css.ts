import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/core/themes/default.css';

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
  userSelect: 'none',
});

export const buttonVariants = styleVariants({
  filled: {
    backgroundColor: theme.colors.primary[700],
    color: theme.colors.neutrals.light[50],
    border: 'solid transparent',
    borderWidth: theme.borders.width.thin,

    ':hover': {
      backgroundColor: theme.colors.primary[600],
    },
    ':active': {
      backgroundColor: theme.colors.primary[800],
    },
  },

  outline: {
    backgroundColor: 'transparent',
    border: 'solid',
    borderWidth: theme.borders.width.thin,

    color: '#fff',
    borderColor: theme.colors.primary[700],

    ':hover': {
      backgroundColor: theme.colors.primaryOverlay[50],
    },
    ':active': {
      backgroundColor: theme.colors.primaryOverlay[100],
    },
  },
  subtle: {
    backgroundColor: 'transparent',
    border: 'solid transparent',
    borderWidth: theme.borders.width.thin,

    color: '#fff',

    ':hover': {
      backgroundColor: theme.colors.primaryOverlay[50],
    },
    ':active': {
      backgroundColor: theme.colors.primaryOverlay[100],
    },
  },
  light: {
    border: 'solid transparent',
    borderWidth: theme.borders.width.thin,

    ':hover': {
      color: theme.colors.neutrals.light[50],
      backgroundColor: theme.colors.primary[600],
    },
    ':active': {
      color: theme.colors.neutrals.light[50],
      backgroundColor: theme.colors.primary[800],
    },
  },
});

export const buttonDarkVariants = styleVariants({
  filled: {
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.neutralsOverlay.dark[700],
      color: '#fff',
    },
  },
  outline: {
    ':disabled': {
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
      color: theme.colors.neutrals.dark[700],
      borderColor: theme.colors.neutrals.dark[700],
    },
  },
  subtle: {
    ':disabled': {
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
      color: theme.colors.neutrals.dark[700],
    },
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.dark[700],
    color: '#fff',

    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.neutralsOverlay.dark[700],
      color: '#fff',
    },
  },
});

export const buttonLightVariants = styleVariants({
  filled: {
    ':disabled': {
      cursor: 'not-allowed',
      color: theme.colors.primary[700],
      backgroundColor: theme.colors.neutralsOverlay.light[700],
    },
  },
  outline: {
    color: theme.colors.primary[700],
    ':disabled': {
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
      color: theme.colors.neutrals.light[700],
      borderColor: theme.colors.neutrals.light[700],
    },
  },
  subtle: {
    color: theme.colors.primary[700],
    ':disabled': {
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
      color: theme.colors.neutrals.light[700],
    },
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[700],
    color: theme.colors.primary[700],

    ':disabled': {
      cursor: 'not-allowed',
      color: theme.colors.primary[700],
      backgroundColor: theme.colors.neutralsOverlay.light[700],
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
