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
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  fontFamily: theme.fontFamily.default,
  userSelect: 'none',
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
