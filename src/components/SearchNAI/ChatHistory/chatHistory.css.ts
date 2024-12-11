import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const chatHistoryContainerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.radius.lg,
  width: 'fit-content',
  height: '100%',
});
export const chatHistoryContainerColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.dark[300],
  },
  light: {
    background: theme.colors.neutralsOverlay.light[300],
  },
});

export const chatHistoryItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.none,
  padding: theme.spacing.xxs,
  borderRadius: theme.borders.radius.lg,
  width: '100%',
  height: '100%',
  maxWidth: 136,

  outline: 'none',
  border: 'none',
  textTransform: 'capitalize',
  textAlign: 'left',

  ':hover': {
    cursor: 'pointer',
  },
});

export const chatHistoryItemColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.dark[700],
    color: theme.colors.neutrals.dark[900],
  },
  light: {
    background: theme.colors.neutralsOverlay.light[700],
    color: theme.colors.neutrals.light[900],
  },
});

export const chatHistoryTitleStyle = style({
  fontSize: theme.fontSizes.xs,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'clip',
  width: 'inherit',
  background:
    'linear-gradient(95deg, #383E41 50.65%, rgba(29, 27, 32, 0.00) 88.62%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
export const chatHistoryTitleColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[900],
  },
  light: {
    color: theme.colors.neutrals.light[900],
  },
});

export const chatHistoryItemDateStyle = style({
  fontSize: theme.fontSizes.xxs,
  whiteSpace: 'nowrap',
});

export const chatHistoryItemDateColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutralsOverlay.light[700],
  },
  light: {
    color: theme.colors.neutralsOverlay.dark[700],
  },
});
