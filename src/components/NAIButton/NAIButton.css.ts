import { theme } from "@/core/themes/default.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const naiButtonContainerStyle = style({
  width: '7.688rem',
  height: '8.313rem',
  position: 'fixed',
  bottom: '10%',
  right: '0%',
})

export const naiButtonStyle = style({
  border: 'none',
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  padding: '0',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  zIndex: '100',
})

export const naiButtonBarStyle = style({
  backgroundColor: theme.colors.primary[700],
  width: '5.5rem',
  height: '2.438rem',
  borderRadius: `${theme.borders.corner.xs} 0 0 ${theme.borders.corner.xs}`,
  transition: 'width 0.8s cubic-bezier( 0.68, -0.55, 0.265, 1.55 )',
  fontFamily: theme.fontFamily.default,
  lineHeight: '0px',
  textAlign: 'start',
  paddingLeft: theme.spacing.xs,
  color: theme.colors.neutrals.light[100],
})

globalStyle(`${naiButtonStyle}:is(:focus, :active)`, {
  outline: 'none',
})

globalStyle(`${naiButtonStyle}:is(:hover, :focus) > #nai-button-bar`, {
  width: '8.313rem',
  transition: 'width 0.8s cubic-bezier( 0.68, -0.55, 0.265, 1.55 )',
})

export const naiButtonBarTextParagraphStyle = style({
  fontSize: theme.fontSizes.xxs,
  opacity: '0',
  transition: 'opacity 0.8s cubic-bezier( 0.68, -0.55, 0.265, 1.55 )',
  zIndex: '10',
  animationDelay: '0.8s',
  margin: '0.75rem 0',
})

export const naiButtonBarTextBoldStyle = style({
  fontSize: theme.fontSizes.s,
  fontWeight: theme.fontWeights.bold,
  opacity: '0',
  transition: 'opacity 0.8s cubic-bezier( 0.68, -0.55, 0.265, 1.55 )',
  animationDelay: '0.8s',
  margin: '0.75rem 0',
})

globalStyle(`${naiButtonStyle}:is(:hover, :focus) > #nai-button-bar ${naiButtonBarTextParagraphStyle}, ${naiButtonStyle}:is(:hover, :focus) > #nai-button-bar ${naiButtonBarTextBoldStyle}`, {
  opacity: '1',
  animationDelay: '0.8s',
  transition: 'opacity 0.8s cubic-bezier( 0.68, -0.55, 0.265, 1.55 )',
  position: 'relative',
  zIndex: '10',
})

export const naiButtonImageStyle = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '1px',
  left: '16px',
  transition: 'transform 0.8s cubic-bezier( 0.68, -0.55, 0.265, 1.55 )',
})