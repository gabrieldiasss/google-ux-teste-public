import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const chartCardWrapper = style([
  {
    borderRadius: 16,
    padding: '1rem 1.5rem',
    width: '100%',
    height: '100%',
    maxWidth: '100vw',
  },
]);

export const headerChartCard = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: 24,

  '@media': {
    '(min-width: 768px)': {
      alignItems: 'end',
    },
  },
});

export const titleChartCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const indicatorChart = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    overflow: 'auto',
    maxHeight: 100,
    paddingRight: 15,
    marginTop: 8,
  },
  {
    '::-webkit-scrollbar': {
      width: '4px',
      height: '6px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.neutrals.light[300],
      borderRadius: '10px',
    },
  },
]);

export const lineVariant = styleVariants({
  light: {
    border: `1px solid ${theme.colors.neutrals.light[150]}`,
  },

  dark: {
    border: `1px solid ${theme.colors.neutrals.dark[150]}`,
  },
});

export const indicatorWithValue = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const indicatorStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontSize: 14,
});

export const circleIndicator = style({
  width: 12,
  height: 12,
  borderRadius: '50%',
});

export const titleSize = style({
  fontSize: theme.fontSizes.m,
});

export const subtitleSize = style({
  fontSize: theme.fontSizes.xs,
});

export const textVariantTitle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[950],
  },
  dark: {
    color: theme.colors.neutrals.dark[950],
  },
});

export const textVariantSubtitle = styleVariants({
  light: {
    color: theme.colors.neutrals.light[900],
  },
  dark: {
    color: theme.colors.neutrals.dark[900],
  },
});

export const chartStrokeChartWrapper = styleVariants({
  light: {
    border: `1px solid ${theme.colors.neutrals.light[150]}`,
  },
  dark: {
    border: `1px solid ${theme.colors.neutrals.dark[150]}`,
  },
});
