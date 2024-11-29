import { theme } from '@/core/themes/default.css';
import { style } from '@vanilla-extract/css';

export const headerWrapperBaseStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
});
export const headerNavWrapperBaseStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing.xxs,
});
