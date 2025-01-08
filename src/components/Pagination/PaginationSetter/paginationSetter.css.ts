import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const paginationSetterWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing.xxxs,
});

export const paginationSetterTextStyle = style({
  fontFamily: theme.fontFamily.default,
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.normal,
  textAlign: 'center',
});

export const paginationSetterColorSchemeStyle = styleVariants({
  dark: {
    backgroundColor: 'transparent',
    color: theme.colors.neutrals.dark[950],
  },
  light: {
    backgroundColor: 'transparent',
    color: theme.colors.neutrals.light[950],
  },
});

export const paginationSetterInputStyle = style({
  paddingBlock: theme.spacing.xxxs,
  paddingInline: theme.spacing.xxs,
  fontSize: theme.fontSizes.xxs,
  backgroundColor: 'transparent',
  outline: 'none',
  borderStyle: 'solid',
  borderRadius: theme.borders.corner.xxs,
  selectors: {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
    },
  },
});
export const paginationSetterInputColorSchemeStyle = styleVariants({
  dark: {
    borderColor: theme.colors.neutrals.dark[150],
    color: theme.colors.neutrals.dark[950],
  },
  light: {
    borderColor: theme.colors.neutrals.light[150],
    color: theme.colors.neutrals.light[950],
  },
});
