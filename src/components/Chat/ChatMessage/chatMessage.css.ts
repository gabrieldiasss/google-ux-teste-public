import { theme } from '@/core/themes/default.css';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const chatMessageStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxs,
  alignItems: 'flex-end',
});

export const chatMessageUser = style({
  justifyContent: 'flex-end',
});

export const chatMessageNAI = style({
  justifyContent: 'flex-start',
});

export const chatMessageContentStyle = style({
  userSelect: 'none',

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  overflowWrap: 'anywhere',

  maxWidth: '65%',
  gap: theme.spacing.xxxs,
  paddingInline: theme.spacing.xs,
  paddingBlock: theme.spacing.xxs,
  borderRadius: theme.borders.corner.xxs,
  marginBottom: 22,
});

globalStyle(`${chatMessageContentStyle} > p`, {
  margin: 0,
  padding: 0,
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

export const chatMessageUserContent = style({
  borderBottomRightRadius: '0',
});

export const chatMessageNAIContent = style({
  borderBottomLeftRadius: '0',
});

export const arrowBase = style({
  position: 'absolute',
  transform: '', // Ajuste para a forma de triângulo
  zIndex: 1000,
});

// Variantes de Posição - Setas
export const arrowVariants = styleVariants({
  default: {
    display: 'none', // Garantir que a seta não apareça na posição default
  },
  topCenter: {
    top: '100%',
    left: '50%',
    transform: 'scaleY(-1) translateX(-50%)',
  },
  topLeft: {
    top: '100%',
    left: '0',
    transform: 'scaleY(-1)',
  },
  topRight: {
    top: '100%',
    right: '0',
    transform: 'scaleX(-1) scaleY(-1)',
  },
  bottomCenter: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    bottom: '100%',
    left: '0px',
    transform: '',
  },
  bottomRight: {
    bottom: '100%',
    right: '0',
    transform: 'scaleX(-1)',
  },
  leftCenter: {
    left: '100%',
    top: '50%',
    transform: 'scaleX(-1) translateY(-50%)',
  },
  leftTop: {
    left: '100%',
    top: '0',
    transform: 'scaleX(-1) scaleY(-1)',
  },
  leftBottom: {
    left: '100%',
    bottom: '0',
    transform: 'scaleX(-1)',
  },
  rightCenter: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  rightTop: {
    right: '100%',
    top: '0',
    transform: 'scaleY(-1)',
  },
  rightBottom: {
    right: '100%',
    bottom: '0',
    transform: 'scaleX(1) scaleY(1)',
  },
});