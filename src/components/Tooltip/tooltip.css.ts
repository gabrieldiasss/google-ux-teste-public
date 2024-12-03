import { theme } from '@/core/themes/default.css';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const tooltipBase = style({
  position: 'absolute',
  paddingInline: theme.spacing.xs,
  paddingBlock: theme.spacing.xxs,

  borderRadius: theme.borders.radius.md,

  fontSize: '12px',
  zIndex: 1000,
  whiteSpace: 'nowrap',
  animation: `${fadeIn} 0.3s ease-in-out`,
});

// Variantes de posição para Tooltip
export const positionVariants = styleVariants({
  default: {
    marginTop: theme.spacing.xxs,
  },
  topCenter: {
    marginBottom: theme.spacing.xxs,
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  topLeft: {
    bottom: '100%',
    left: '100%',
    borderBottomLeftRadius: '0',
  },
  topRight: {
    bottom: '100%',
    right: '100%',
    borderBottomRightRadius: '0',
  },
  bottomCenter: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: theme.spacing.xxs,
  },
  bottomLeft: {
    top: '100%',
    left: '100%',
    borderTopLeftRadius: '0',
    marginTop: theme.spacing.xxs,
  },
  bottomRight: {
    top: '100%',
    right: '100%',
    borderTopRightRadius: '0',
    marginTop: theme.spacing.xxs,
  },
  leftCenter: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: theme.spacing.xxs,
  },
  leftTop: {
    right: '100%',
    top: '0',
    borderTopRightRadius: '0',

    marginRight: theme.spacing.xxs,
  },
  leftBottom: {
    right: '100%',
    bottom: '0',
    borderBottomRightRadius: '0',
    marginRight: theme.spacing.xxs,
  },
  rightCenter: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: theme.spacing.xxs,
  },
  rightTop: {
    left: '100%',
    top: '0',
    borderTopLeftRadius: '0',
    marginLeft: theme.spacing.xxs,
  },
  rightBottom: {
    left: '100%',
    bottom: '0',
    borderBottomLeftRadius: '0',
    marginLeft: theme.spacing.xxs,
  },
});

export const tooltipVariantColorScheme = styleVariants({
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[900],
    color: theme.colors.neutrals.dark[950],
    filter: `drop-shadow(0 0 5px ${theme.colors.neutralsOverlay.light[100]})`,
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[900],
    color: theme.colors.neutrals.light[950],
    filter: `drop-shadow(0 0 5px ${theme.colors.neutralsOverlay.dark[100]})`,
  },
});

// Seta - Base
export const arrowBase = style({
  position: 'absolute',
  borderRadius: '2px',
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
