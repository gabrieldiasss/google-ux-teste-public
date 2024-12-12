import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const loaderWrapperStyle = style({
  borderRadius: '50%',
  width: 38,
  height: 38,
  position: 'relative',
  textAlign: 'center',
  lineHeight: '38px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const loaderPercentageStyle = style({
  fontSize: theme.fontSizes.xxs,
  fontWeight: theme.fontWeights.bold,
});
export const loaderPercentageColorSchemeStyle = styleVariants({
  dark: {
    color: '#83888e',
  },
  light: {
    color: '#84888f',
  },
});

//canvas
export const canvasStyle = style({
  borderRadius: '50%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
});
