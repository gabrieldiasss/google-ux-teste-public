import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/core/themes/default.css';

export const toggleOuterStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  border: 'none',
  outlineWidth: 1,
  outlineStyle: 'solid',
  cursor: 'pointer',
  borderRadius: theme.borders.corner.s,
  paddingLeft: 1,
  paddingRight: 1,
  transition: 'all 0.2s ease',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const toggleOuterStyleStateVariantsLight = styleVariants({
  unswitched: {
    justifyContent: 'flex-start',
    outlineColor: theme.colors.neutrals.light[200],
    backgroundColor: theme.colors.neutralsOverlay.light[900],
  },
  switched: {
    justifyContent: 'flex-end',
    outlineColor: theme.colors.primary[500],
    backgroundColor: theme.colors.primary[500],
  },
});

export const toggleOuterStyleStateVariantsDark = styleVariants({
  unswitched: {
    justifyContent: 'flex-start',
    outlineColor: theme.colors.neutrals.dark[200],
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
  },
  switched: {
    justifyContent: 'flex-end',
    outlineColor: theme.colors.primary[500],
    backgroundColor: theme.colors.primary[500],
  },
});

export const toggleOuterStyleSizesVariants = styleVariants({
  xs: {
    width: '38px',
    height: '20px',
  },
  lg: {
    width: '54px',
    height: '28px',
  },
});

export const toggleInnerStyle = style({
  outline: 0,
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const toggleInnerStyleStateVariantsLight = styleVariants({
  unswitched: {
    backgroundColor: theme.colors.primary[500],
    ':hover': {
      backgroundColor: theme.colors.primary[400],
    },
  },
  switched: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    ':hover': {
      backgroundColor: theme.colors.primary[200],
    },
  },
});
export const toggleInnerStyleStateVariantsDark = styleVariants({
  unswitched: {
    backgroundColor: theme.colors.primary[500],
    ':hover': {
      backgroundColor: theme.colors.primary[400],
    },
  },
  switched: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    ':hover': {
      backgroundColor: theme.colors.primary[200],
    },
  },
});

export const toggleInnerDisabledStyleStateVariantsLight = styleVariants({
  unswitched: {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.primaryOverlay[50],
  },
  switched: {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.neutralsOverlay.light[300],
  },
});

export const toggleInnerDisabledStyleStateVariantsDark = styleVariants({
  unswitched: {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.primaryOverlay[50],
  },
  switched: {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.neutralsOverlay.dark[300],
  },
});

export const toggleInnerStyleSizesVariants = styleVariants({
  xs: {
    width: '16px',
    height: '16px',
  },
  lg: {
    width: '24px',
    height: '24px',
  },
});
