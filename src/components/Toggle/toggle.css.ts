import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/core/themes/default.css';

export const toggleOuterStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid',
  cursor: 'pointer',
  borderRadius: theme.borders.radius.xl,
  paddingLeft: 1,
  paddingRight: 1,
  transition:
    'background-color 0.3s ease, border-color 0.3s ease, justify-content 0.3s ease, width 0.3s ease, height 0.3s ease',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const toggleOuterStyleStateVariants = styleVariants({
  unswitched: {
    justifyContent: 'flex-start',
    borderColor: theme.colors.neutrals.light[300],
    backgroundColor: theme.colors.neutralsOverlay.light[900],
  },
  switched: {
    justifyContent: 'flex-end',
    borderColor: theme.colors.primary[500],
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
  border: 0,
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const toggleInnerStyleStateVariants = styleVariants({
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
export const toggleInnerDisabledStyleStateVariants = styleVariants({
  unswitched: {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.primary[50],
  },
  switched: {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.primary[400],
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
