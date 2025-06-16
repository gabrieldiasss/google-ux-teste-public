import { theme, themeTokens } from '@/core/themes/default.css';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
export const snackbarContainer = style({
  borderRadius: theme.borders.corner.s,
  animation: `${fadeIn} 0.3s ease-in`,
});

export const snackbarVariantWrapper = styleVariants({
  light: {
    backgroundColor: theme.colors.neutrals.light[50],
    color: theme.colors.neutrals.light[500],
    filter: `drop-shadow(0 0 5px ${theme.colors.neutralsOverlay.dark[100]})`,
  },
  dark: {
    backgroundColor: theme.colors.neutrals.dark[50],
    color: theme.colors.neutrals.dark[500],
    filter: `drop-shadow(0 0 5px ${theme.colors.neutralsOverlay.light[100]})`,
  },
});

export const snackbarContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing.m,
  borderRadius: theme.borders.corner.s,
  padding: `${theme.spacing.xs} ${theme.spacing.s}`,
  position: 'relative',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
});

export const snackbarTypeStyles = styleVariants({
  success: {
    background: theme.colors.gradient[6],
  },
  error: {
    background: theme.colors.gradient[4],
  },
  warning: {
    background: theme.colors.gradient[5],
  },
  info: {
    background: theme.colors.gradient[3],
  },
});

export const snackbarHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.s,
});

export const snackbarInfoContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xl,
  '@media': {
    [`screen and (max-width: ${themeTokens.breakpoints.md})`]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing.m,
    },
  },
});

export const snackbarIconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content',
  width: 'fit-content',
  borderRadius: '50%',
  padding: 6,
});

export const snackbarIconContainerVariantColorScheme = styleVariants({
  light: {
    color: theme.colors.neutralsOverlay.light[700],
  },
  dark: {
    color: theme.colors.neutralsOverlay.dark[700],
  },
});

export const snackbarIconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 20,
  width: 20,
  color: 'inherit',
  borderRadius: '50%',
});

export const snackbarIconWrapperVariantStyles = {
  light: styleVariants({
    success: { background: theme.colors.successOverlay[100] },
    error: { background: theme.colors.dangerOverlay[100] },
    warning: { background: theme.colors.warningOverlay[100] },
    info: { background: theme.colors.infoOverlay[100] },
  }),
  dark: styleVariants({
    success: { background: theme.colors.successOverlay[200] },
    error: { background: theme.colors.dangerOverlay[200] },
    warning: { background: theme.colors.warningOverlay[200] },
    info: { background: theme.colors.infoOverlay[200] },
  }),
} as const;

export const snackbarIconVariantStyles = {
  light: styleVariants({
    success: { background: theme.colors.success[700] },
    error: { background: theme.colors.danger[700] },
    warning: { background: theme.colors.warning[700] },
    info: { background: theme.colors.info[700] },
  }),
  dark: styleVariants({
    success: { background: theme.colors.success[400] },
    error: { background: theme.colors.danger[400] },
    warning: { background: theme.colors.warning[400] },
    info: { background: theme.colors.info[400] },
  }),
} as const;

export const snackbarBody = style({
  display: 'flex',
  flexDirection: 'column',
});

export const actionsButtonsRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,
});

export const snackbarBaseTitleStyle = {
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.bold,
};

export const snackbarTitleVariantColorScheme = styleVariants({
  light: {
    ...snackbarBaseTitleStyle,
    color: theme.colors.neutrals.light[950],
  },
  dark: {
    ...snackbarBaseTitleStyle,
    color: theme.colors.neutrals.dark[950],
  },
});
export const snackbarBaseMessageStyle = {
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.normal,
};

export const snackbarMessageVariantColorScheme = styleVariants({
  light: {
    ...snackbarBaseMessageStyle,
    color: theme.colors.neutrals.light[900],
  },
  dark: {
    ...snackbarBaseMessageStyle,
    color: theme.colors.neutrals.dark[900],
  },
});

export const snackbarComplementButton = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  border: 0,
  background: 'none',
  padding: theme.spacing.none,
  margin: theme.spacing.none,
  fontWeight: theme.fontWeights.medium,

  cursor: 'pointer',
});

export const snackbarComplementButtonVariantStyle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[700],
  },
  dark: {
    color: theme.colors.neutrals.dark[700],
  },
});

export const snackbarCloseButton = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  border: 0,
  background: 'none',
  padding: theme.spacing.none,
  margin: theme.spacing.none,
  color: 'inherit',

  cursor: 'pointer',
});
