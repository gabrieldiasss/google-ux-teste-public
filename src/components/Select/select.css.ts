import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

const sharedDisabledStyles = {
  ':disabled': {
    cursor: 'not-allowed',
  },
};

const sharedFocusWithinStyles = (color: string) => ({
  selectors: {
    '&:focus-within': {
      outlineColor: color,
    },
  },
});

const sharedWrapperBase = {
  display: 'flex',
  gap: theme.spacing.xxxs,
  fontSize: theme.fontSizes.xs,
  fontFamily: theme.fontFamily.default,
};

export const selectWrapperStyle = style({
  ...sharedWrapperBase,
  flexDirection: 'column',
  width: '100%',
});

export const selectLabelStyle = style({
  ...sharedWrapperBase,
  flexDirection: 'row',
});

export const selectLabelVariantStyle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[950],
  },
  dark: {
    color: theme.colors.neutrals.dark[950],
  },
});

export const selectLabelAsteriskStyle = style({
  color: theme.colors.danger[500],
});

export const selectLabelErrorStyle = style({
  color: theme.colors.danger[500],
  fontSize: theme.fontSizes.xs,
});

// Input styles
export const selectInputStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: theme.fontSizes.s,
  fontFamily: theme.fontFamily.default,
  fontWeight: theme.fontWeights.normal,
  border: 'none',
  borderRadius: theme.borders.corner.xs,
  outlineStyle: 'solid',
  outlineWidth: theme.borders.width.thin,
  paddingInline: theme.spacing.xs,
  paddingBlock: theme.spacing.xs,
  cursor: 'pointer',
  width: '100%',
  textAlign: 'left',
  boxSizing: 'border-box',
  ...sharedDisabledStyles,
});

export const selectInputVariantColors = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[800],
    outlineColor: theme.colors.neutrals.light[100],
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.light[800],
      color: theme.colors.neutrals.light[600],
    },
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[800],
    outlineColor: theme.colors.neutrals.dark[100],
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.dark[900],
      color: theme.colors.neutrals.dark[100],
    },
  },
});

export const selectInputVariantColorsWithErrors = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.danger[500],
    outlineColor: theme.colors.danger[500],
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.light[800],
      color: theme.colors.neutrals.light[600],
    },
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.danger[500],
    outlineColor: theme.colors.danger[500],
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
    ':disabled': {
      backgroundColor: theme.colors.neutralsOverlay.dark[900],
      color: theme.colors.neutrals.dark[100],
    },
  },
});

const sharedOptionsWrapperBase = {
  paddingInline: theme.spacing.xxs,
  paddingBlock: theme.spacing.xxxs,
  borderRadius: theme.borders.corner.xs,
  width: 'var(--button-width)',
  maxWidth: 'var(--button-width)',
};

export const selectOptionsWrapperStyleVariants = styleVariants({
  light: {
    ...sharedOptionsWrapperBase,
    background: theme.colors.neutrals.light[50],
    outlineColor: theme.colors.neutrals.light[150],
    color: theme.colors.neutrals.light[800],
  },
  dark: {
    ...sharedOptionsWrapperBase,
    background: theme.colors.neutrals.dark[50],
    outlineColor: theme.colors.neutrals.dark[150],
    color: theme.colors.neutrals.dark[800],
  },
});

const sharedOptionBaseStyle = {
  padding: theme.spacing.xxs,
  cursor: 'pointer',
  borderRadius: theme.borders.corner.xs,
  marginBottom: theme.spacing.xxxs,
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: theme.colors.primaryOverlay[300],
  },
};

export const selectOptionStyle = styleVariants({
  light: {
    ...sharedOptionBaseStyle,

    color: theme.colors.neutrals.light[800],
  },
  dark: {
    ...sharedOptionBaseStyle,
    color: theme.colors.neutrals.dark[800],
  },
});
export const selectInputWrapperSizesStyles = styleVariants({
  xs: {
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.spacing.xxs,
    fontSize: theme.fontSizes.s,
  },
  lg: {
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.spacing.xs,
    fontSize: theme.fontSizes.s,
  },
});
