import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const widgetBaseStyle = style({
  border: '1px solid transparent',
  borderRadius: theme.borders.radius.lg,
});

export const widgetVariantStyle = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[700],
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[700],
  },
});
