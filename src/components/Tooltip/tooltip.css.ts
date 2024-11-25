import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

// Base do Tooltip
export const tooltipBase = style({
  position: 'absolute',
  paddingInline: theme.spacing.xs,
  paddingBlock: theme.spacing.xxs,

  borderRadius: theme.borders.radius.md,

  fontSize: '12px',
  zIndex: 1000,
  whiteSpace: 'nowrap',
});

// Variantes de posição para Tooltip
export const positionVariants = styleVariants({
  default: {
    marginTop: '8px',
  },
  topCenter: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  topLeft: {
    bottom: '100%',
    left: '0',
  },
  topRight: {
    bottom: '100%',
    right: '0',
  },
  bottomCenter: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    top: '100%',
    left: '0',
  },
  bottomRight: {
    top: '100%',
    right: '0',
  },
  leftCenter: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  leftTop: {
    right: '100%',
    top: '0',
  },
  leftBottom: {
    right: '100%',
    bottom: '0',
  },
  rightCenter: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  rightTop: {
    left: '100%',
    top: '0',
  },
  rightBottom: {
    left: '100%',
    bottom: '0',
  },
});

export const tooltipVariantColorScheme = styleVariants({
  dark: {
    backgroundColor: theme.colors.neutralsOverlay.dark[700],
    color: theme.colors.neutrals.dark[950],
  },
  light: {
    backgroundColor: theme.colors.neutralsOverlay.light[700],
    color: theme.colors.neutrals.light[950],
  },
});

// Seta - Base
export const arrowBase = style({
  position: 'absolute',
  width: '10px',
  height: '10px',
  borderRadius: '2px',
  transform: 'rotate(45deg)', // Ajuste para a forma de triângulo
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
    transform: 'translateX(-50%) rotate(45deg)', // A seta rotacionada
  },
  topLeft: {
    top: '100%',
    left: '10px',
    transform: 'rotate(45deg)',
  },
  topRight: {
    top: '100%',
    right: '10px',
    transform: 'rotate(45deg)',
  },
  bottomCenter: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  bottomLeft: {
    bottom: '100%',
    left: '10px',
    transform: 'rotate(45deg)',
  },
  bottomRight: {
    bottom: '100%',
    right: '10px',
    transform: 'rotate(45deg)',
  },
  leftCenter: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
    marginLeft: '-5px',
  },
  leftTop: {
    left: '100%',
    top: '10px',
    transform: 'rotate(45deg)',
    marginLeft: '-5px',
  },
  leftBottom: {
    left: '100%',
    bottom: '10px',
    transform: 'rotate(45deg)',
    marginLeft: '-5px',
  },
  rightCenter: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
    marginRight: '-5px',
  },
  rightTop: {
    right: '100%',
    top: '10px',
    transform: 'rotate(45deg)',
    marginRight: '-5px',
  },
  rightBottom: {
    right: '100%',
    bottom: '10px',
    transform: 'rotate(45deg)',
    marginRight: '-5px',
  },
});
