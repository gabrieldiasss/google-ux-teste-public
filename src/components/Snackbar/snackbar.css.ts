import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const snackbarWrapperStyle = style({
  borderRadius: theme.borders.radius.lg,
  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.xs,
});

export const snackbarTypeVariants = styleVariants({
  success: {
    backgroundColor: theme.colors.successOverlay[800],
  },
  error: {
    backgroundColor: theme.colors.dangerOverlay[800],
  },
  warning: {
    backgroundColor: theme.colors.warningOverlay[800],
  },
  info: {
    backgroundColor: theme.colors.infoOverlay[800],
  },
});
