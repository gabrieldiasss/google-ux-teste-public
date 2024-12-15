import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const chatBackgroundStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  padding: theme.spacing.xxs,
  borderRadius: theme.borders.radius.md,
});
export const chatBackgroundColorSchemeStyle = styleVariants({
  light: {
    background: theme.colors.neutralsOverlay.dark[100],
  },
  dark: {
    background: theme.colors.neutralsOverlay.light[100],
  },
});

// Wrapper principal
export const chatWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  borderRadius: theme.borders.radius.md,
});

export const chatWrapperColorSchemeStyle = styleVariants({
  light: {
    background: theme.colors.neutrals.light[50],
  },
  dark: {
    background: theme.colors.neutrals.dark[50],
  },
});

// Header
export const chatHeaderStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.xxs,
  borderTopLeftRadius: theme.borders.radius.md,
  borderTopRightRadius: theme.borders.radius.md,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
});

export const chatHeaderColorSchemeStyle = styleVariants({
  light: {
    backgroundColor: theme.colors.neutralsOverlay.dark[50],
    borderBottomColor: theme.colors.neutralsOverlay.dark[50],
  },
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.light[50],
    borderBottomColor: theme.colors.neutralsOverlay.light[50],
  },
});

// Header conteúdo
export const chatHeaderContentStyle = style({
  display: 'flex',
  gap: theme.spacing.m,
  alignItems: 'center',
  flexDirection: 'row',
});

export const chatHeaderTitleWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: theme.spacing.none,
});

export const chatHeaderTitleStyle = style({
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.bold,
});
export const chatHeaderTitleColorSchemeStyle = styleVariants({
  light: {
    color: theme.colors.neutralsOverlay.dark[800],
  },
  dark: {
    color: theme.colors.neutralsOverlay.light[800],
  },
});

export const chatHeaderSubtitleStyle = style({
  fontSize: theme.fontSizes.sm,
  color: theme.colors.neutralsOverlay.dark[500],
});
export const chatHeaderSubtitleColorSchemeStyle = styleVariants({
  light: {
    color: theme.colors.neutralsOverlay.dark[500],
  },
  dark: {
    color: theme.colors.neutralsOverlay.light[500],
  },
});
export const chatHeaderButtonsStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxs,
});
export const chatHeaderButtonsColorSchemeStyle = styleVariants({
  light: {
    color: theme.colors.neutralsOverlay.dark[500],
  },
  dark: {
    color: theme.colors.neutralsOverlay.light[500],
  },
});

export const chatHeaderButtonItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'inherit',
  margin: 0,
  gap: theme.spacing.xxs,
  padding: theme.spacing.xxxs,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
});

// Corpo principal
export const chatMainContentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  overflow: 'auto',
  paddingInline: theme.spacing.xxs,
  paddingBottom: theme.spacing.xxs,
  borderBottomLeftRadius: theme.borders.radius.md,
  borderBottomRightRadius: theme.borders.radius.md,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const chatMainContentColorSchemeStyle = styleVariants({
  light: {
    background: theme.colors.neutrals.light[50],
  },
  dark: {
    background: theme.colors.neutrals.dark[50],
  },
});

// Mensagem
export const chatMessageStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxs,
  alignItems: 'center',
  marginBlock: theme.spacing.xxs,
});

export const chatMessageUser = style({
  justifyContent: 'flex-end',
});

export const chatMessageNAI = style({
  justifyContent: 'flex-start',
});

export const chatMessageContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xxxs,
  paddingInline: theme.spacing.xxs,
  paddingBlock: theme.spacing.xs,
  borderRadius: theme.borders.radius.md,
});

export const chatMessageContentColorSchemeStyle = styleVariants({
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.light[50],
    color: theme.colors.neutrals.dark[950],
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.dark[50],
    color: theme.colors.neutrals.light[950],
  },
});

export const chatMessageUserContent = style({});
export const chatMessageNAIContent = style({});
