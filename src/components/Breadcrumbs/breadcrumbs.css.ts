import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const breadcrumbNavBaseStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  overflow: 'hidden',
});

export const breadcrumbListStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',

  padding: 0,
  margin: 0,
  listStyle: 'none',
  overflow: 'hidden',
  gap: theme.spacing.xxxs,

  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.normal,

  transition: 'all 0.2s ease',
});

const activeOrHover = {
  light: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.neutrals.light[800],
  },
  dark: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.neutrals.dark[800],
  },
};

export const breadcrumbListVariantColorModeStyle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[600],
    transition: 'all 0.2s ease',

    ':hover': {
      ...activeOrHover.light,
    },
  },
  dark: {
    color: theme.colors.neutrals.light[600],
    transition: 'all 0.2s ease',

    ':hover': {
      ...activeOrHover.dark,
    },
  },
});

export const breadcrumbListActiveItemStyle = styleVariants({
  ...activeOrHover,
});
