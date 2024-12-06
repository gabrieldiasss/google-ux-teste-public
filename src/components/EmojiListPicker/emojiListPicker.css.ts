import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const emojiListPickerContainer = style({
  padding: '1rem',
  width: '100%',
  height: '40%',
  overflow: 'auto',

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
export const emojiListPickerContainerListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxs,
});
export const emojiListPickerContainerListColorSchemeStyle = styleVariants({
  dark: {},
  light: {},
});

//by category
export const emojiListPickerCategoryStyle = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const emojiListPickerCategoryTitleStyle = style({
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.normal,
  fontStyle: 'normal',
  lineHeight: '150%',
  letterSpacing: 0,
});
export const emojiListPickerCategoryTitleColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
  },
  light: {
    color: theme.colors.neutrals.light[800],
  },
});

export const emojiListPickerItemStyle = style({
  cursor: 'pointer',
  fontSize: 18,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.radius.xs,
  userSelect: 'none',

  transition: 'all 0.2s ease',
});

export const emojiListPickerItemColorSchemeStyle = styleVariants({
  dark: {
    ':hover': {
      background: theme.colors.neutralsOverlay.dark[400],
    },
  },
  light: {
    ':hover': {
      background: theme.colors.neutralsOverlay.light[400],
    },
  },
});
