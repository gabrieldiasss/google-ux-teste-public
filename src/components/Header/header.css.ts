import { keyframes, style } from '@vanilla-extract/css';
import { theme } from '@/core/themes/default.css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const headerWrapperBaseStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
});
export const headerNavWrapperBaseStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xxs,
});
export const headerLoggedNavWrapperBaseStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xxxs,
});

export const headerMenuOptionsBaseStyle = style({
  display: 'flex',
  gap: theme.spacing.xxxs,
  borderRadius: theme.borders.radius['4xs'],
  animation: `${fadeIn} 0.3s ease-in-out`,
});
