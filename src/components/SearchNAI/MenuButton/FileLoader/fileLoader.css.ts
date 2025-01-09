import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const fileLoaderCloseButtonStyle = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  border: 0,
  background: 'none',
  padding: theme.spacing.none,
  margin: theme.spacing.none,
  color: 'inherit',

  cursor: 'pointer',
});

export const fileLoaderContainerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.corner.xs,
  width: '100%',
  height: '100%',
});
export const fileLoaderContainerColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.light[50],
  },
  light: {
    background: theme.colors.neutralsOverlay.dark[50],
  },
});

export const fileLoaderInnerContainerStyle = style({
  width: '100%',
  display: 'flex',
  padding: theme.spacing.xxs,
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: theme.borders.corner.xs,
});

export const fileLoaderInnerContainerColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutrals.dark[50],
  },
  light: {
    background: theme.colors.neutrals.light[50],
  },
});

export const fileLoaderLoaderStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing.xs,
});

export const fileLoaderTextContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.none,
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'start',
});

export const fileLoaderTitleStyle = style({
  fontSize: theme.fontSizes.xxs,
});
export const fileLoaderTitleColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
  },
  light: {
    color: theme.colors.neutrals.light[800],
  },
});

export const fileLoaderTextStyle = style({
  fontSize: theme.fontSizes.xxs,
});

export const fileLoaderTextStyleColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutralsOverlay.light[500],
  },
  light: {
    color: theme.colors.neutralsOverlay.dark[500],
  },
});
