import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';
import bgChatLight from '@/assets/chat/background-chat.svg';
import bgChatDark from '@/assets/chat/background-chat-dark.svg';

export const chatBackgroundStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  padding: theme.spacing.xxs,
  borderRadius: theme.borders.corner.xxs,
  fontFamily: theme.fontFamily.default,
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
  borderRadius: theme.borders.corner.xxs,
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
  borderTopLeftRadius: theme.borders.corner.xxs,
  borderTopRightRadius: theme.borders.corner.xxs,
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
  alignItems: 'flex-start',
  gap: theme.spacing.none,
});

export const chatHeaderTitleStyle = style({
  fontSize: theme.fontSizes.m,
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
  fontSize: theme.fontSizes.xxs,
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
  paddingBlock: theme.spacing.xxs,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  overflow: 'auto',
  paddingInline: theme.spacing.xxs,
  paddingBottom: theme.spacing.xxs,
  borderBottomLeftRadius: theme.borders.corner.xxs,
  borderBottomRightRadius: theme.borders.corner.xxs,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const chatMainContentColorSchemeStyle = styleVariants({
  light: {
    backgroundImage: `url(${bgChatLight})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255,0.2)',
    backgroundBlendMode: 'lighten',
  },
  dark: {
    backgroundImage: `url(${bgChatDark})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255,0.2)',
    backgroundBlendMode: 'lighten',
  },
});
