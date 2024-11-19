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
  borderRadius: theme.borders.radius.lg,
});

export const skeletonStyleVariants = styleVariants({
  dark: {
    background: `repeating-linear-gradient(to right,
    ${theme.colors.neutralsOverlay.light[50]} ,
    rgba(0,0,0,0),
   ${theme.colors.neutralsOverlay.light[50]} ) `,

    backgroundSize: '200% 100%',
    animation: `${loading} 5s ease-out infinite`,
  },
  light: {
    background: `repeating-linear-gradient(to right,
    ${theme.colors.neutralsOverlay.dark[50]} ,
    rgba(34, 39, 42, 0),
    ${theme.colors.neutralsOverlay.dark[50]} ) `,
    backgroundSize: '200% 100%',
    animation: `${loading} 5s ease-out infinite`,
  },
});
