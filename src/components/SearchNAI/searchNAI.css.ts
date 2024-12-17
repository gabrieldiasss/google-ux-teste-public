import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const inputWrapperStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
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
    background: theme.colors.neutralsOverlay.light[50],
  },
  light: {
    color: theme.colors.neutrals.light[800],
    background: theme.colors.neutralsOverlay.dark[50],
  },
});

export const inputStyle = style({
  boxSizing: 'border-box',
  resize: 'none',
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: 'inherit',
  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xxs,
  height: 36,
  paddingBlock: theme.spacing.xxs,

  '::-webkit-scrollbar': {
    width: 4,
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    backgroundColor: theme.colors.primary[300],
    borderRadius: 10,
  },
  '::-webkit-scrollbar-track': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    backgroundColor: theme.colors.neutrals.light[150],
    borderRadius: 10,
    border: '1px solid transparent',
    backgroundClip: 'content-box',
  },
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
  fontSize: theme.fontSizes.xxs,
  userSelect: 'none',
  cursor: 'text',
});

export const placeholderTextAudioStyle = style({
  fontSize: theme.fontSizes.xxs,
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
