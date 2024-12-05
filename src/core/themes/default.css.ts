import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from '@vanilla-extract/css';
globalFontFace('Open Sans', [
  {
    src: "url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2) format('woff2')",
    fontStyle: 'normal',
  },
]);

globalFontFace('Material Symbols Rounded', [
  {
    src: "url(https://fonts.gstatic.com/s/materialsymbolsrounded/v214/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2) format('woff2')",
    fontStyle: 'normal',
  },
]);

globalFontFace('Neo Sans Pro', [
  {
    src: "url('https://fonts.cdnfonts.com/s/40085/NeoSansProRegular.woff') format('woff')",
    fontStyle: 'normal',
  },
]);

globalStyle('html, body', {
  fontFamily: 'Open Sans, sans-serif',
});

export const themeTokens = {
  colors: {
    primary: {
      50: '#FFF6ED',
      100: '#FEEAD6',
      200: '#FDD1AB',
      300: '#FBB076',
      400: '#F8833F',
      500: '#F5631A',
      600: '#E84910',
      700: '#BF340F',
      800: '#982B14 ',
      900: '#7A2614',
      950: '#421008',
    },
    primaryOverlay: {
      50: '#E849100D', // rgba(232,73,16,0.05)
      100: '#E849101A', // rgba(232,73,16,0.1)
      200: '#E8491033', // rgba(232,73,16,0.2)
      300: '#E849104D', // rgba(232,73,16,0.3)
      400: '#E8491066', // rgba(232,73,16,0.4)
      500: '#E8491080', // rgba(232,73,16,0.5)
      600: '#E8491099', // rgba(232,73,16,0.6)
      700: '#E84910B3', // rgba(232,73,16,0.7)
      800: '#E84910CC', // rgba(232,73,16,0.8)
      900: '#E84910E6', // rgba(232,73,16,0.9)
    },

    secondary: {
      50: '#eef7ff',
      100: '#d8edff',
      200: '#bae0ff',
      300: '#8bcfff',
      400: '#54b2ff',
      500: '#2d90ff',
      600: '#1670fa',
      700: '#0f59e6',
      800: '#1348ba',
      900: '#164194',
      950: '#122859',
    },
    secondaryOverlay: {
      50: '#1641940D', // rgba(22,65,148,0.05)
      100: '#1641941A', // rgba(22,65,148,0.1)
      200: '#16419433', // rgba(22,65,148,0.2)
      300: '#1641944D', // rgba(22,65,148,0.3)
      400: '#16419466', // rgba(22,65,148,0.4)
      500: '#16419480', // rgba(22,65,148,0.5)
      600: '#16419499', // rgba(22,65,148,0.6)
      700: '#164194B3', // rgba(22,65,148,0.7)
      800: '#164194CC', // rgba(22,65,148,0.8)
      900: '#164194E6', // rgba(22,65,148,0.9)
    },

    danger: {
      50: '#fff1f1',
      100: '#ffe1e1',
      200: '#ffc7c7',
      300: '#ffa1a1',
      400: '#ff6a6a',
      500: '#f83b3b',
      600: '#e31a1a',
      700: '#c11414',
      800: '#9f1515',
      900: '#841818',
    },
    dangerOverlay: {
      50: '#E31A1A0D', // rgba(227, 26, 26, 0.05)
      100: '#E31A1A1A', // rgba(227, 26, 26, 0.1)
      200: '#E31A1A33', // rgba(227, 26, 26, 0.2)
      300: '#E31A1A4D', // rgba(227, 26, 26, 0.3)
      400: '#E31A1A66', // rgba(227, 26, 26, 0.4)
      500: '#E31A1A80', // rgba(227, 26, 26, 0.5)
      600: '#E31A1A99', // rgba(227, 26, 26, 0.6)
      700: '#E31A1AB3', // rgba(227, 26, 26, 0.7)
      800: '#E31A1ACC', // rgba(227, 26, 26, 0.8)
      900: '#E31A1AE6', // rgba(227, 26, 26, 0.9)
    },
    success: {
      50: '#ebfef4',
      100: '#cdfee4',
      200: '#a0face',
      300: '#63f2b5',
      400: '#26e197',
      500: '#01b574',
      600: '#00a369',
      700: '#008257',
      800: '#006746',
      900: '#00543c',
    },
    successOverlay: {
      50: '#01B5740D', // rgba(1, 181, 116, 0.05)
      100: '#01B5741A', // rgba(1, 181, 116, 0.1)
      200: '#01B57433', // rgba(1, 181, 116, 0.2)
      300: '#01B5744D', // rgba(1, 181, 116, 0.3)
      400: '#01B57466', // rgba(1, 181, 116, 0.4)
      500: '#01B57480', // rgba(1, 181, 116, 0.5)
      600: '#01B57499', // rgba(1, 181, 116, 0.6)
      700: '#01B574B3', // rgba(1, 181, 116, 0.7)
      800: '#01B574CC', // rgba(1, 181, 116, 0.8)
      900: '#01B574E6', // rgba(1, 181, 116, 0.9)
    },
    warning: {
      50: '#fff8eb',
      100: '#ffebc6',
      200: '#ffd388',
      300: '#ffb74a',
      400: '#ff9c20',
      500: '#f97607',
      600: '#dd5202',
      700: '#b73506',
      800: '#94280c',
      900: '#7a230d',
    },
    warningOverlay: {
      50: '#F976070D', // rgba(249, 118, 7, 0.05)
      100: '#F976071A', // rgba(249, 118, 7, 0.1)
      200: '#F9760733', // rgba(249, 118, 7, 0.2)
      300: '#F976074D', // rgba(249, 118, 7, 0.3)
      400: '#F9760766', // rgba(249, 118, 7, 0.4)
      500: '#F9760780', // rgba(249, 118, 7, 0.5)
      600: '#F9760799', // rgba(249, 118, 7, 0.6)
      700: '#F97607B3', // rgba(249, 118, 7, 0.7)
      800: '#F97607CC', // rgba(249, 118, 7, 0.8)
      900: '#F97607E6', // rgba(249, 118, 7, 0.9)
    },

    info: {
      50: '#e9faff',
      100: '#a7eeff',
      200: '#6be7ff',
      300: '#26d4ff',
      400: '#00b0ff',
      500: '#0086ff',
      600: '#006bff',
      700: '#005ce6',
      800: '#0052b3',
      900: '#002752',
    },
    infoOverlay: {
      50: '#0086FF0D', // rgba(0, 134, 255, 0.05)
      100: '#0086FF1A', // rgba(0, 134, 255, 0.1)
      200: '#0086FF33', // rgba(0, 134, 255, 0.2)
      300: '#0086FF4D', // rgba(0, 134, 255, 0.3)
      400: '#0086FF66', // rgba(0, 134, 255, 0.4)
      500: '#0086FF80', // rgba(0, 134, 255, 0.5)
      600: '#0086FF99', // rgba(0, 134, 255, 0.6)
      700: '#0086FFB3', // rgba(0, 134, 255, 0.7)
      800: '#0086FFCC', // rgba(0, 134, 255, 0.8)
      900: '#0086FFE6', // rgba(0, 134, 255, 0.9)
    },
    neutrals: {
      light: {
        50: '#FFFFFF',
        100: '#f5f5f5',
        150: '#E4E8E9',
        200: '#CBD4D6',
        300: '#A7B5B9',
        400: '#7C8E94',
        500: '#617379',
        600: '#536167',
        700: '#475157',
        800: '#3d4448',
        900: '#383e41',
        950: '#22272a',
      },

      dark: {
        50: '#22272a',
        100: '#383e41',
        150: '#3d4448',
        200: '#475157',
        300: '#536167',
        400: '#617379',
        500: '#7C8E94',
        600: '#A7B5B9',
        700: '#CBD4D6',
        800: '#E4E8E9',
        900: '#f5f5f5',
        950: '#FFFFFF',
      },
    },

    neutralsOverlay: {
      light: {
        50: '#FFFFFF0D', // rgba(255, 255, 255, 0.05)
        100: '#FFFFFF1A', // rgba(255, 255, 255, 0.1)
        200: '#FFFFFF33', // rgba(255, 255, 255, 0.2)
        300: '#FFFFFF4D', // rgba(255, 255, 255, 0.3)
        400: '#FFFFFF66', // rgba(255, 255, 255, 0.4)
        500: '#FFFFFF80', // rgba(255, 255, 255, 0.5)
        600: '#FFFFFF99', // rgba(255, 255, 255, 0.6)
        700: '#FFFFFFB3', // rgba(255, 255, 255, 0.7)
        800: '#FFFFFFCC', // rgba(255, 255, 255, 0.8)
        900: '#FFFFFFE6', // rgba(255, 255, 255, 0.9)
      },
      dark: {
        50: '#22272A0D', // rgba(34, 39, 42, 0.05)
        100: '#22272A1A', // rgba(34, 39, 42, 0.1)
        200: '#22272A33', // rgba(34, 39, 42, 0.2)
        300: '#22272A4D', // rgba(34, 39, 42, 0.3)
        400: '#22272A66', // rgba(34, 39, 42, 0.4)
        500: '#22272A80', // rgba(34, 39, 42, 0.5)
        600: '#22272A99', // rgba(34, 39, 42, 0.6)
        700: '#22272AB3', // rgba(34, 39, 42, 0.7)
        800: '#22272ACC', // rgba(34, 39, 42, 0.8)
        900: '#22272AE6', // rgba(34, 39, 42, 0.9)
      },
    },

    gradient: {
      1: 'linear-gradient(225deg, #0F59E6 0.44%, #1670FA 5.39%, #E84910 54.13%, #F5631A 71.48%, #F8833F 88.33%, #FBB076 99.56%)',
      2: 'linear-gradient(140.11deg, #D8EDFF 1.64%, #54B2FF 40.6%, #A7B5B9 68.76%, #FBB070 96.34%)',
      3: 'radial-gradient(circle at 1%, rgba(0, 134, 255,0.12) 33%, rgba(0, 134, 255, 0.00) 70% 100%)',
      4: 'radial-gradient(circle at 1%, rgba(227, 26, 26,0.12) 33%, rgba(227, 26, 26, 0.00) 70% 100%)',
      5: 'radial-gradient(circle at 1%, rgba(249, 118, 7,0.12) 33%, rgba(249, 118, 7, 0.00) 70% 100%)',
      6: 'radial-gradient(circle at 1%, rgba(1, 181, 116,0.12) 33%, rgba(1, 181, 116, 0.00) 70% 100%)',
    },
  },

  spacing: {
    none: '0px',
    '4xs': '2px',
    xxxs: '4px',
    xxs: '8px',
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
    xxxl: '80px',
    '4xl': '96px',
  },
  fontFamily: {
    default: 'Open Sans',
    heading: 'Neo Sans Pro',
    icon: 'Material Symbols Rounded',
    emoji: 'Noto Color Emoji',
  },
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
  },

  fontWeights: {
    normal: '400',
    medium: '600',
    bold: '700',
  },

  borders: {
    radius: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
    },
    width: {
      thin: '1.5px',
      thick: '2px',
    },
  },

  breakpoints: {
    xs: '336px',
    sm: '351px',
    md: '1232px',
    lg: '1344px',
    xl: '1824px',
  },
};
export const theme = createGlobalTheme(':root', {
  ...themeTokens,
});

export const primaryShade: keyof typeof theme.colors.primary = 500;
