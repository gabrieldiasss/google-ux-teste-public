import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const menuButtonsWrapperStyle = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.radius.lg,
  left: 0,
});

export const menuButtonsWrapperColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
    background: theme.colors.neutralsOverlay.light[50],
  },
  light: {
    color: theme.colors.neutrals.light[800],
    background: theme.colors.neutralsOverlay.dark[50],
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
  overflow: 'auto',
  position: 'absolute',
  zIndex: 50,
  width: '100%',

  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
export const menuChatPositionStyle = styleVariants({
  top: {
    top: 'unset',
    bottom: '100%',
    left: 0,
    marginBottom: theme.spacing.xxxs,
  },
  bottom: {
    top: '100%',
    bottom: 'unset',
    left: 0,
    marginTop: theme.spacing.xxxs,
  },
});
