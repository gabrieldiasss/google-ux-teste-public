import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

const sharedWrapperBase = {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  borderRadius: theme.borders.radius.lg,
  gap: theme.spacing.xxs,
  transition: 'all 0.2s ease',
  outlineStyle: 'solid',
  outlineWidth: theme.borders.width.thin,
};

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

export const passwordInputGlobalWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  fontSize: theme.fontSizes.xs,
  fontFamily: theme.fontFamily.default,
});

export const passwordInputWrapperStyle = style({
  ...sharedWrapperBase,
  cursor: 'text',
});

export const passwordInputDisabledWrapperStyle = style({
  ...sharedWrapperBase,
  cursor: 'not-allowed',
});

export const passwordInputWrapperSizesStyles = styleVariants({
  xs: {
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.spacing.xxs,
    fontSize: theme.fontSizes.sm,
  },
  lg: {
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
  },
});

export const passwordInputWrapperVariantStyles = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[800],
    outlineColor: theme.colors.neutrals.light[100],
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[800],
    outlineColor: theme.colors.neutrals.dark[100],
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
});

export const passwordInputWrapperVariantColorsDisabled = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[300],
    outlineColor: theme.colors.neutrals.light[300],
    ...sharedDisabledStyles,
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[300],
    outlineColor: theme.colors.neutrals.dark[300],
    ...sharedDisabledStyles,
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
});

export const passwordInputWrapperVariantColorsWithErrors = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.danger[500],
    outlineColor: theme.colors.danger[500],
    ...sharedDisabledStyles,
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.danger[500],
    outlineColor: theme.colors.danger[500],
    ...sharedDisabledStyles,
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
});

export const passwordInputWrapperVariantColorsWithSuccess = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.success[500],
    outlineColor: theme.colors.success[500],
    ...sharedDisabledStyles,
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.success[500],
    outlineColor: theme.colors.success[500],
    ...sharedDisabledStyles,
    ...sharedFocusWithinStyles(theme.colors.primary[primaryShade]),
  },
});

export const passwordInputLabelStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing.xxxs,
});

export const passwordInputLabelVariantStyle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[950],
  },
  dark: {
    color: theme.colors.neutrals.dark[950],
  },
});

export const passwordInputLabelAsteriskStyle = style({
  color: theme.colors.danger[500],
});

export const passwordInputLabelErrorStyle = style({
  color: theme.colors.danger[500],
  fontSize: theme.fontSizes.xs,
});

export const passwordInputStyle = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: theme.fontSizes.sm,
  backgroundColor: 'transparent',
  color: 'inherit',
  fontFamily: theme.fontFamily.default,
  fontWeight: theme.fontWeights.normal,
  ...sharedDisabledStyles,
});

export const passwordInputShowOrHideButtonStyle = style({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  color: 'inherit',
});
