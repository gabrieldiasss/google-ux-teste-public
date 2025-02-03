import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';
export const paginationWrapperStyle = style({
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: 'max-content',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing.m,
});
export const paginationButtonsWrapperStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
});

export const paginationDotWrapperStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  margin: 0,
  paddingInline: theme.spacing.xxs,
  userSelect: 'none',
});
export const paginationDotColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[800],
  },
  light: {
    color: theme.colors.neutrals.light[800],
  },
});
