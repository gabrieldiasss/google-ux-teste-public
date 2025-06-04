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
  backgroundColor: '#22272AE5',
  width: 'fit-content',
  height: 'fit-content',
  pointerEvents: 'auto',
});

export const buttonStyle = style({
  width: '22px',
  height: '22px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.primary[700],
      color: theme.colors.primary[50],
    },
  },
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
  background: theme.colors.secondary[500],
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
  xs: {
    width: '32px',
    height: '32px',
    fontSize: theme.fontSizes.s,
  },
  sm: {
    width: '40px',
    height: '40px',
    fontSize: theme.fontSizes.s,
  },
  md: {
    width: '48px',
    height: '48px',
    fontSize: theme.fontSizes.xl,
  },
  lg: {
    width: '70px',
    height: '70px',
    fontSize: theme.fontSizes.xxl,
  },
  xl: {
    width: '100px',
    height: '100px',
    fontSize: theme.fontSizes.xxxl,
  },
});

export const circleInnerPaddingSizes = styleVariants({
  xs: {
    padding: '2px',
  },
  sm: {
    padding: '2px',
  },
  md: {
    padding: '3px',
  },
  lg: {
    padding: '4px',
  },
  xl: {
    padding: '5px',
  },
});
