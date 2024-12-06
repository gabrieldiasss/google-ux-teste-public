import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const alertBoxGlobalWrapperStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
});

export const alertBoxGlobalWrapperColorSchemeVariantStyle = styleVariants({
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[700],
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.dark[600],
  },
});

export const alertBoxWrapperBaseStyle = style({
  padding: theme.spacing.m,
  borderRadius: theme.borders.radius.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const alertBoxWrapperVariantStyle = styleVariants({
  dark: {
    backgroundColor: theme.colors.neutrals.dark[50],
  },
  light: {
    backgroundColor: theme.colors.neutrals.light[50],
  },
});

export const alertBoxWrapperContentBaseStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
});
0;

export const alertBoxIconWrapperBaseStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: 'fit-content',
  padding: 6,
});

export const alertBoxWrapperTextBaseStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  alignItems: 'center',
});

export const alertBoxWrapperTextColorSchemeVariantStyle = styleVariants({
  dark: {
    color: theme.colors.neutrals.dark[900],
  },
  light: {
    color: theme.colors.neutrals.light[900],
  },
});

export const alertBoxIconWrapperVariantStyle = {
  info: style({
    backgroundColor: theme.colors.infoOverlay[100],
    color: theme.colors.info[600],
  }),

  success: style({
    backgroundColor: theme.colors.successOverlay[100],
    color: theme.colors.success[600],
  }),

  warning: style({
    backgroundColor: theme.colors.warningOverlay[100],
    color: theme.colors.warning[600],
  }),

  error: style({
    backgroundColor: theme.colors.dangerOverlay[100],
    color: theme.colors.danger[600],
  }),
};
export const alertBoxTitleStyle = style({
  textAlign: 'center',
  fontWeight: 'bold',
});
export const alertBoxDescriptionStyle = style({
  textAlign: 'center',
  fontSize: '14px',
  color: 'inherit',
});
export const alertBoxButtonWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: theme.spacing.xxs,
  color: 'inherit',
});
