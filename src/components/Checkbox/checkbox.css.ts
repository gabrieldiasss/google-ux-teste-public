import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

const checkboxWrapperBaseStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xxs,
  padding: theme.spacing.xxxs,
  cursor: 'pointer',
  userSelect: 'none' as const,
  transition: 'all 0.2s ease',
  borderRadius: theme.borders.radius.sm,
};

export const checkboxWrapperVariantStyles = styleVariants({
  light: {
    color: theme.colors.neutrals.light[900],
  },
  dark: {
    color: theme.colors.neutrals.dark[900],
  },
});

export const checkboxWrapperStyle = style({
  ...checkboxWrapperBaseStyle,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: theme.colors.primaryOverlay[100],
  },
});

export const checkboxWrapperDisabledStyle = style({
  ...checkboxWrapperBaseStyle,
  cursor: 'not-allowed',
});

export const checkboxInputStyle = style({
  appearance: 'none',
  display: 'flex',
  WebkitAppearance: 'none',
  padding: theme.spacing['4xs'],
  width: 16,
  height: 16,
  transition: 'all 0.2s ease',

  borderRadius: theme.borders.radius.sm,
  backgroundColor: theme.colors.neutrals.light[50],
  borderStyle: 'solid',
  borderWidth: theme.borders.width.thin,
  borderColor: theme.colors.neutrals.light[200],
  outline: 'none',
  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },

    //if checked then change the background color
    '&:checked': {
      backgroundColor: theme.colors.primary[400],
      borderColor: theme.colors.primary[400],
    },

    [`${checkboxWrapperVariantStyles['dark']} &:disabled `]: {
      backgroundColor: theme.colors.neutrals.dark[150],
      borderColor: theme.colors.neutrals.dark[150],
    },
    [`${checkboxWrapperVariantStyles['dark']}:hover &:not(:disabled)`]: {
      borderColor: theme.colors.primary[400],
    },
    [`${checkboxWrapperVariantStyles['light']} &:disabled`]: {
      backgroundColor: theme.colors.neutrals.light[150],
      borderColor: theme.colors.neutrals.light[150],
    },
    [`${checkboxWrapperVariantStyles['light']}:hover &:not(:disabled)`]: {
      borderColor: theme.colors.primary[400],
    },
  },
});

export const checkboxLabelStyle = style({
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.normal,
  fontFamily: theme.fontFamily.default,
  color: 'inherit',
});

export const checkboxLabelPositionVariantStyle = styleVariants({
  left: {
    paddingRight: theme.spacing.xxxs,
  },
  right: {
    paddingLeft: theme.spacing.xxxs,
  },
});

export const checkboxIconStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  position: 'absolute',
  inset: 0,
});
