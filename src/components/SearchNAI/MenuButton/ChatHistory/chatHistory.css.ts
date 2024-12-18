import { theme } from '@/core/themes/default.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const chatHistoryContainerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.xxxs,
  padding: theme.spacing.xxxs,
  borderRadius: theme.borders.corner.xs,
  width: 'fit-content',
  height: '100%',
});
export const chatHistoryContainerColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.light[50],
  },
  light: {
    background: theme.colors.neutralsOverlay.dark[50],
  },
});

export const chatHistoryItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.none,
  padding: theme.spacing.xxs,
  borderRadius: theme.borders.corner.xs,
  width: '100%',
  height: '100%',
  maxWidth: 136,

  outline: 'none',
  border: 'none',
  textTransform: 'capitalize',
  textAlign: 'left',

  ':hover': {
    cursor: 'pointer',
  },
});

export const chatHistoryItemColorSchemeStyle = styleVariants({
  dark: {
    background: theme.colors.neutralsOverlay.dark[700],
    color: theme.colors.neutrals.dark[900],
  },
  light: {
    background: theme.colors.neutralsOverlay.light[700],
    color: theme.colors.neutrals.light[900],
  },
});

export const chatHistoryTitleStyle = style({
  fontSize: theme.fontSizes.xxs,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'clip',
  width: 'inherit',
  backgroundClip: 'text !important',
  WebkitBackgroundClip: 'text !important',
  WebkitTextFillColor: 'transparent !important',
});
export const chatHistoryTitleColorSchemeStyle = {
  dark: style({
    color: theme.colors.neutrals.dark[900],
    background:
      'linear-gradient(95deg, #F1F1F1 50.65%, rgba(29, 27, 32, 0.00) 88.62%)',
  }),
  light: style({
    color: theme.colors.neutrals.light[900],
    background:
      'linear-gradient(95deg, #383E41 50.65%, rgba(29, 27, 32, 0.00) 88.62%)',
  }),
};

export const chatHistoryItemDateStyle = style({
  fontSize: theme.fontSizes.xxs,
  whiteSpace: 'nowrap',
});

export const chatHistoryItemDateColorSchemeStyle = styleVariants({
  dark: {
    color: theme.colors.neutralsOverlay.light[700],
  },
  light: {
    color: theme.colors.neutralsOverlay.dark[700],
  },
});
