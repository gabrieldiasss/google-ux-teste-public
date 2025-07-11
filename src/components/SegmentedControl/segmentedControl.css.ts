import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const segmentedWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,

  borderRadius: theme.borders.corner.s,
});

export const segmentedWrapperStateVariants = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.light[100],
  },
  light: {
    background: theme.colors.neutralsOverlay.dark[100],
  },
});

export const buttonSegmentedStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.xxxs,

  cursor: 'pointer',
  transition: 'all 0.2s ease',
  borderRadius: theme.borders.corner.xs,
  borderWidth: theme.borders.width.thin,
  border: 'solid transparent',

  height: 'max-content',
  padding: `${theme.spacing['xxs']} ${theme.spacing['xs']}`,

  lineHeight: 1.5,
  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.medium,
});

export const buttonStyleStateVariantsLight = styleVariants({
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

export const buttonStyleStateVariantsDark = styleVariants({
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
      backgroundColor: theme.colors.neutralsOverlay.dark[400],
    },
  },
  inactive: {
    color: theme.colors.neutrals.dark[700],
    backgroundColor: theme.colors.neutrals.dark[50],

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
      backgroundColor: theme.colors.neutralsOverlay.dark[400],
    },
  },
});
