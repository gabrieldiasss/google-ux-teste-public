import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const fileRenderDescriptionStyle = style({
  fontSize: theme.fontSizes.xxs,
});

export const fileRenderDescriptionColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[500],
  },
  light: {
    color: theme.colors.neutrals.light[500],
  },
});
export const fileRenderIconStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 7,
  borderRadius: '50%',
  backgroundColor: theme.colors.primary[400],
  maxWidth: 'fit-content',
  maxHeight: 'fit-content',
});

export const fileRenderStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  gap: theme.spacing.xs,
});

export const fileRenderContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  width: '100%',
});
