import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const listSectionItemWrapperBaseStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing.xxs,

  padding: theme.spacing.xs,
  borderRadius: theme.borders.radius.xl,
});
export const listSectionItemWrapperVariantStyle = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[950],
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[950],
  },
});
export const listSectionItemInfoWrapperStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing.xs,
});

export const listSectionGeneralInfoWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing.xxs,
});
export const listSectionGeneralInfoTextWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing.xxxs,
});
export const listSectionTitleStyle = style({
  fontSize: theme.fontSizes.md,
  fontWeight: theme.fontWeights.bold,
});
export const listSectionDescriptionStyle = style({
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.normal,
});
export const listSectionSubdescriptionStyle = style({
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.normal,
});
