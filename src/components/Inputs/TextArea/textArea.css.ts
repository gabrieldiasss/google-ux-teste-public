import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

// Shared styles
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

const sharedInputBase = {
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
  ...sharedDisabledStyles,
};

export const textAreaWrapperStyle = style({
  ...sharedWrapperBase,
  flexDirection: 'column',
});

export const textAreaLabelStyle = style({
  ...sharedWrapperBase,
  flexDirection: 'row',
});

export const textAreaLabelVariantStyle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[950],
  },
  dark: {
    color: theme.colors.neutrals.dark[950],
  },
});

export const textAreaLabelAsteriskStyle = style({
  color: theme.colors.danger[500],
});

export const textAreaLabelErrorStyle = style({
  color: theme.colors.danger[500],
  fontSize: theme.fontSizes.xs,
});

// Input styles
export const textAreaInputStyle = style(sharedInputBase);

export const textAreaInputVariantColors = styleVariants({
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

export const textAreaInputVariantColorsWithErrors = styleVariants({
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
