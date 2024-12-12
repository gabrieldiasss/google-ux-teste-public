import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/core/themes/default.css';

export const actionIconStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.xxs,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  borderRadius: theme.borders.radius.lg,
  borderWidth: theme.borders.width.thin,
  height: 'max-content',
  fontFamily: theme.fontFamily.default,
});

export const actionIconVariants = styleVariants({
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

export const actionIconDarkVariants = styleVariants({
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

export const actionIconLightVariants = styleVariants({
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
export const actionIconSizes = styleVariants({
  xs: {
    padding: 8,
    fontSize: theme.fontSizes.xs,
    gap: theme.spacing.xxxs,
  },
  sm: {
    padding: 9,
    fontSize: theme.fontSizes.sm,
    gap: theme.spacing.xxs,
  },
  md: {
    padding: 14,
    fontSize: theme.fontSizes.md,
    gap: theme.spacing.xxs,
  },
  lg: {
    padding: 18,
    fontSize: theme.fontSizes.lg,
    gap: theme.spacing.xxs,
  },
});
