import { primaryShade, theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.borders.radius.lg,
  gap: '10px',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
});

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: theme.fontSizes.sm,
  backgroundColor: 'transparent',
  color: 'inherit',
  fontFamily: theme.fontFamily.default,
  fontWeight: theme.fontWeights.normal,
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const sizes = styleVariants({
  xs: {
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.spacing.xxs,
    fontSize: theme.fontSizes.sm,
  },
  lg: {
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
  },
});

export const variants = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[800],
    borderWidth: theme.borders.width.thin,
    borderStyle: 'solid',
    borderColor: theme.colors.neutrals.light[100],
    selectors: {
      '&:focus-within': {
        borderColor: theme.colors.primary[primaryShade],
      },
    },
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[800],
    borderWidth: theme.borders.width.thin,
    borderStyle: 'solid',
    borderColor: theme.colors.neutrals.dark[100],
    selectors: {
      '&:focus-within': {
        borderColor: theme.colors.primary[primaryShade],
      },
    },
  },
});
