import { theme } from '@/core/themes/default.css';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

const bounce = keyframes({
  '0%, 80%, 100%': {
    marginTop: 4,
  },
  '40%': {
    marginTop: 0,
  },
});

export const dotsLoaderStyle = style({
  height: 12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing.xxxs,
});

export const dotStyle = style({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: theme.colors.neutralsOverlay.dark[300],
  animation: `${bounce} 0.6s infinite ease-in`,
  selectors: {
    '&:nth-child(1)': { animationDelay: '0s' },
    '&:nth-child(2)': { animationDelay: '0.2s' },
    '&:nth-child(3)': { animationDelay: '0.4s' },
  },
});
export const dotColorSchemeStyle = styleVariants({
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.light[300],
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.dark[300],
  },
});
