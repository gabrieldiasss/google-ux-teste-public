import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

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
