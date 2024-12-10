import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const inputWrapperStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  width: '100%',
  borderRadius: theme.borders.radius.lg,
  transition: 'all 0.2s ease',
});

export const inputWrapperColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
    background: theme.colors.neutralsOverlay.dark[300],
  },
  light: {
    color: theme.colors.neutrals.light[800],
    background: theme.colors.neutralsOverlay.light[300],
  },
});

export const inputStyle = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: 'inherit',
  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xs,
});

export const placeholderWrapperStyle = style({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxxs,
});

export const placeholderTextStyle = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xs,
  userSelect: 'none',
  cursor: 'text',
});

export const placeholderHighlightStyle = style({
  fontWeight: theme.fontWeights.bold,
});

export const attachmentUploaderWrapperStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xs,
});

export const attachmentUploaderWrapperColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
  },
  light: {
    color: theme.colors.neutrals.light[800],
  },
});

export const historyWrapperStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xs,
});

export const historyWrapperColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
  },
  light: {
    color: theme.colors.neutrals.light[800],
  },
});

export const menuButtonsWrapperStyle = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.radius.lg,
  right: 0,
});

export const menuButtonsWrapperColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
    background: theme.colors.neutralsOverlay.dark[300],
  },
  light: {
    color: theme.colors.neutrals.light[800],
    background: theme.colors.neutralsOverlay.light[300],
  },
});
export const menuButtonsPositionStyle = styleVariants({
  top: {
    top: 'unset',
    bottom: '100%',
    marginBottom: theme.spacing.xxxs,
  },
  bottom: {
    top: '100%',
    bottom: 'unset',
    marginTop: theme.spacing.xxxs,
  },
});
export const menuChatStyle = style({
  position: 'absolute',
  zIndex: 50,
  width: '100%',
});
export const menuChatPositionStyle = styleVariants({
  top: {
    top: 'unset',
    bottom: '100%',
    marginBottom: theme.spacing.xxxs,
  },
  bottom: {
    top: '100%',
    bottom: 'unset',
    marginTop: theme.spacing.xxxs,
  },
});
