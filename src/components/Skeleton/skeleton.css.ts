import { theme } from '@/core/themes/default.css';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';
const loading = keyframes({
  '0%': {
    backgroundPosition: '200% 0',
  },

  '100%': {
    backgroundPosition: '-200% 0',
  },
});

export const skeletonBase = style({
  width: '100%',
  height: '100%',
  borderRadius: theme.borders.corner.xs,
});

export const skeletonStyleVariants = styleVariants({
  dark: {
    background: `linear-gradient(to right,
    ${theme.colors.neutralsOverlay.light[100]} ,
    rgba(0,0,0,0),
   ${theme.colors.neutralsOverlay.light[100]} ) `,
    backgroundSize: '200% 100%',
    animation: `${loading} 8s linear infinite`,
  },
  light: {
    background: `linear-gradient(to right,
    ${theme.colors.neutralsOverlay.dark[100]} ,
    rgba(34, 39, 42, 0),
    ${theme.colors.neutralsOverlay.dark[100]} ) `,
    backgroundSize: '200% 100%',
    animation: `${loading} 8s linear infinite`,
  },
});
