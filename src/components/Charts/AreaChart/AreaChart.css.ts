import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const chartCardWrapper = style([
  {
    borderRadius: 16,
    padding: '1rem 1.5rem',
    width: '100%',
    height: '100%',
    maxWidth: '100vw',
    overflowX: 'auto',

    // Estilização para Firefox
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 transparent',
  },
  {
    // Estilização para WebKit (Chrome, Safari, Edge)
    '::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
      borderRadius: '10px',
    },
  },
]);

export const headerChartCard = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: 12,

  '@media': {
    '(min-width: 768px)': {
      alignItems: 'end',
      marginBottom: 24,
    },
  },
});

export const titleChartCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const indicatorChart = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,

  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      gap: 12,
    },
  },
});

export const indicator = style({
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
