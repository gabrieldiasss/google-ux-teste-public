import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const segmentedWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,

  borderRadius: theme.borders.radius.xl,
});

export const segmentedWrapperStateVariants = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.light[200],
  },
  light: {
    background: theme.colors.neutralsOverlay.dark[200],
  },
});

export const buttonSegmentedStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.xxxs,

  cursor: 'pointer',
  transition: 'all 0.2s ease',
  borderRadius: theme.borders.radius.lg,
  borderWidth: theme.borders.width.thin,
  border: 'solid transparent',

  height: 'max-content',
  padding: `${theme.spacing['xxs']} ${theme.spacing['xs']}`,

  lineHeight: 1.5,
  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.medium,
});

export const buttonStyleStateVariants = styleVariants({
  active: {
    backgroundColor: theme.colors.primary[primaryShade],
    color: theme.colors.neutrals.light[50],

    ':hover': {
      backgroundColor: theme.colors.primary[400],
    },
    ':active': {
      backgroundColor: theme.colors.primary[600],
    },
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.neutralsOverlay.light[400],
    },
  },
  inactive: {
    color: theme.colors.neutrals.light[700],
    backgroundColor: theme.colors.neutrals.light[50],

    ':hover': {
      color: theme.colors.neutrals.light[50],
      backgroundColor: theme.colors.primary[400],
    },
    ':active': {
      color: theme.colors.neutrals.light[50],
      backgroundColor: theme.colors.primary[600],
    },
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.neutralsOverlay.light[400],
    },
  },
});
