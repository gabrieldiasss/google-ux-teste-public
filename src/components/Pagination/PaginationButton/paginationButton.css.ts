import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const paginationButtonStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: theme.spacing.xxxs,
  paddingInline: theme.spacing.xxs,
  cursor: 'pointer',
  userSelect: 'none',

  borderRadius: theme.borders.corner.xxs,
  borderWidth: theme.borders.width.thin,
  borderStyle: 'solid',
  transition: 'all 0.2s ease',
});
export const paginationButtonTextStyle = style({
  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.normal,
  textAlign: 'center',
});

export const paginationButtonColorSchemeStyle = {
  dark: styleVariants({
    active: {
      border: theme.colors.primary[500],
      backgroundColor: theme.colors.primary[500],
      color: theme.colors.neutrals.dark[950],
    },
    inactive: {
      backgroundColor: 'transparent',
      color: theme.colors.neutrals.dark[950],
      borderColor: theme.colors.neutrals.dark[150],
    },
  }),
  light: styleVariants({
    active: {
      border: theme.colors.primary[500],
      backgroundColor: theme.colors.primary[500],
      color: theme.colors.neutrals.light[50],
    },
    inactive: {
      backgroundColor: 'transparent',
      color: theme.colors.neutrals.light[950],
      borderColor: theme.colors.neutrals.light[150],
    },
  }),
};

export const paginationWithIconStyle = style({
  padding: theme.spacing.none,
  border: 0,
});
