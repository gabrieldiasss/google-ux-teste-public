import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const chatMainContentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',

  overflow: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
export const chatHeaderStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.xxs,
  borderTopLeftRadius: theme.borders.radius.md,
  borderTopRightRadius: theme.borders.radius.md,
});
export const chatHeaderButtonItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  margin: 0,
  gap: theme.spacing.xxs,
  padding: theme.spacing.xxxs,

  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
});
export const chatHeaderButtonsStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxs,
});
export const chatHeaderColorSchemeStyle = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[50],
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[50],
  },
});
