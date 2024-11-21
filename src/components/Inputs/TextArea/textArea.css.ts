import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';
export const textAreaWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  fontSize: theme.fontSizes.xs,
  fontFamily: theme.fontFamily.default,
});

export const textAreaLabelStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing.xxxs,
});
export const textAreaLabelVariantStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[900],
  },
  light: {
    color: theme.colors.neutrals.light[900],
  },
});
export const textAreaLabelAsteriskStyle = style({
  color: theme.colors.danger[500],
});
export const textAreaLabelErrorStyle = style({
  color: theme.colors.danger[500],
  fontSize: theme.fontSizes.xs,
});

export const textAreaInputStyle = style({
  display: 'flex',
  alignItems: 'center',

  fontSize: theme.fontSizes.sm,
  fontFamily: theme.fontFamily.default,
  fontWeight: theme.fontWeights.normal,

  border: 'none',
  borderRadius: theme.borders.radius.lg,
  outlineStyle: 'solid',
  outlineWidth: theme.borders.width.thin,

  paddingInline: theme.spacing.xs,
  paddingBlock: theme.spacing.xs,

  height: 78,

  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const textAreaInputVariantColors = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[800],

    outlineColor: theme.colors.neutrals.light[100],
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.light[800],
      color: theme.colors.neutrals.light[600],
    },
    selectors: {
      '&:focus-within': {
        color: theme.colors.neutrals.light[800],
        outlineColor: theme.colors.primary[primaryShade],
      },
    },
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[800],

    outlineColor: theme.colors.neutrals.dark[100],
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.dark[900],
      color: theme.colors.neutrals.dark[100],
    },
    selectors: {
      '&:focus-within': {
        color: theme.colors.neutrals.dark[800],
        outlineColor: theme.colors.primary[primaryShade],
      },
    },
  },
});

export const textAreaInputVariantColorsWithErrors = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.danger[500],

    outlineColor: theme.colors.danger[500],
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.light[800],
      color: theme.colors.neutrals.light[600],
    },
    selectors: {
      '&:focus-within': {
        color: theme.colors.neutrals.light[800],
        outlineColor: theme.colors.primary[primaryShade],
      },
    },
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.danger[500],

    outlineColor: theme.colors.danger[500],
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.dark[900],
      color: theme.colors.neutrals.dark[100],
    },
    selectors: {
      '&:focus-within': {
        color: theme.colors.neutrals.dark[800],
        outlineColor: theme.colors.primary[primaryShade],
      },
    },
  },
});
