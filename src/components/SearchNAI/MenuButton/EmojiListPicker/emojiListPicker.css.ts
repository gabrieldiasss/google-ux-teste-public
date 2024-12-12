import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const emojiListPickerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.radius.lg,
  width: '100%',
  height: '100%',
});
export const emojiListPickerContainerColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.dark[300],
  },
  light: {
    background: theme.colors.neutralsOverlay.light[300],
  },
});
export const emojiListPickerContainerScrollStyle = style({
  overflow: 'auto',
  height: 'inherit',
  flex: 1,
  width: '100%',
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.radius.lg,

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

  height: '30dvh',
  borderRadius: theme.borders.radius.lg,
  gap: theme.spacing.xxs,
  paddingInline: theme.spacing.xs,
  paddingBlock: theme.spacing.xxs,
});
export const emojiListPickerContainerListColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.dark[900],
  },
  light: {
    background: theme.colors.neutralsOverlay.light[900],
  },
});

//by category
export const emojiListPickerCategoryStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 1fr))',
  rowGap: theme.spacing['4xs'],
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  fontSize: 18,
  padding: theme.spacing['4xs'],
  borderRadius: theme.borders.radius.lg,
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
