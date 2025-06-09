import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/core/themes/default.css';
export const circleWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const circleOuterStyle = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const containerStyle = style({
  padding: '4px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  height: 'fit-content',
  pointerEvents: 'auto',
});

export const buttonRemoveStyle = style({
  position: 'absolute',
  cursor: 'pointer',
});

export const buttonBackgroundVariantOverlayStyle = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[100],
    selectors: {
      '&:hover': {
        color: theme.colors.neutrals.dark[50],
      },
    },
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[100],
    '&:hover': {
      color: theme.colors.neutrals.light[50],
    },
  },
});

export const buttonBackgroundVariantContainerStyle = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.dark[50],
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.light[50],
  },
});

export const circleInnerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'inherit',
});

export const avatarContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutrals.light[50],
  width: '90%',
  height: '90%',
  borderRadius: '50%',
  fontFamily: theme.fontFamily.default,
  userSelect: 'none',
  objectFit: 'cover',
});

export const avatarButtonPosition = styleVariants({
  xs: {
    top: '-12px',
    right: '24px',
  },
  sm: {
    top: '-8px',
    right: '22px',
  },
  md: {
    top: '-4px',
    right: '18px',
  },
  lg: {
    top: '4px',
    right: '18px',
  },
  xl: {
    top: '8px',
    right: '8px',
  },
});

export const avatarSizes = styleVariants({
  sm: {
    width: '28px',
    height: '32px',
    fontSize: theme.fontSizes.s,
  },
  md: {
    width: '40px',
    height: '40px',
    fontSize: theme.fontSizes.s,
  },
  lg: {
    width: '48px',
    height: '48px',
    fontSize: theme.fontSizes.xl,
  },
});

export const circleInnerPaddingSizes = styleVariants({
  sm: {
    padding: '2px',
  },
  md: {
    padding: '2px',
  },
  lg: {
    padding: '3px',
  },
});
