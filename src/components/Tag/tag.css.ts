import { theme } from '@/core/themes/default.css';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const tagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.xxxs,
  color: theme.colors.neutrals.light[50],

  width: 'fit-content',

  borderColor: 'transparent',
  borderWidth: theme.borders.width.thin,
  borderStyle: 'solid',
  borderRadius: theme.borders.corner.xxs,

  paddingInline: theme.spacing.xxs,
  paddingBlock: theme.spacing.xxxs,

  lineHeight: 1.5,
  fontSize: theme.fontSizes.xxs,
  fontFamily: theme.fontFamily.default,
  fontWeight: theme.fontWeights.normal,
});

export const tagLightColors = styleVariants({
  success: {
    background: theme.colors.successOverlay[100],
    color: theme.colors.neutrals.light[900],
  },
  info: {
    background: theme.colors.infoOverlay[100],
    color: theme.colors.neutrals.light[900],
  },
  warning: {
    background: theme.colors.warningOverlay[100],
    color: theme.colors.neutrals.light[900],
  },
  error: {
    background: theme.colors.dangerOverlay[100],
    color: theme.colors.neutrals.light[900],
  },
  neutral: {
    background: theme.colors.neutralsOverlay.light[50],
    color: theme.colors.neutrals.light[900],
  },
  outline: {
    background: 'transparent',
    borderColor: theme.colors.neutrals.light[700],
    color: theme.colors.neutrals.light[700],
  },
});

export const tagDarkColors = styleVariants({
  success: {
    background: theme.colors.successOverlay[100],
    color: theme.colors.neutrals.dark[900],
  },
  info: {
    background: theme.colors.infoOverlay[100],
    color: theme.colors.neutrals.dark[900],
  },
  warning: {
    background: theme.colors.warningOverlay[100],
    color: theme.colors.neutrals.dark[900],
  },
  error: {
    background: theme.colors.dangerOverlay[100],
    color: theme.colors.neutrals.dark[900],
  },
  neutral: {
    background: theme.colors.neutralsOverlay.dark[50],
    color: theme.colors.neutrals.dark[900],
  },
  outline: {
    background: 'transparent',
    borderColor: theme.colors.neutrals.dark[700],
    color: theme.colors.neutrals.dark[700],
  },
});

export const tagIconButton = style({
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease-in-out',
  borderRadius: theme.borders.corner.xxxs,
  ':hover': {
    borderRadius: theme.borders.corner.xxxs,
    boxSizing: 'border-box',
    transition: 'background-color 0.2s ease-in-out',
  },
  ':active': {
    borderRadius: theme.borders.corner.xxxs,
    boxSizing: 'border-box',
    transition: 'background-color 0.2s ease-in-out',
  }
})

export const tagIconButtonColorScheme = styleVariants({
  light: {
    ':hover': {
      backgroundColor: theme.colors.neutralsOverlay.dark[100],
      borderRadius: theme.borders.corner.xxxs,
      boxSizing: 'border-box',
      transition: 'background-color 0.2s ease-in-out',
    },
    ':active': {
      backgroundColor: theme.colors.neutralsOverlay.dark[100],
      borderRadius: theme.borders.corner.xxxs,
      boxSizing: 'border-box',
      transition: 'background-color 0.2s ease-in-out',
    }
  },
  dark: {
    ':hover': {
      backgroundColor: theme.colors.neutralsOverlay.light[100],
      borderRadius: theme.borders.corner.xxxs,
      boxSizing: 'border-box',
      transition: 'background-color 0.2s ease-in-out',
    },
    ':active': {
      backgroundColor: theme.colors.neutralsOverlay.light[100],
      borderRadius: theme.borders.corner.xxxs,
      boxSizing: 'border-box',
      transition: 'background-color 0.2s ease-in-out',
    }
  },
})