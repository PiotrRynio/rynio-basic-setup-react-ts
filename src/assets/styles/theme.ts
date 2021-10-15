import { css } from 'styled-components';
import { Theme } from './themeType';

export const theme: Theme = {
  breakpoints: {
    sm: '560px',
    md: '768px',
    lg: '1024px',
    xl: '1260px',
    xxl: '1900px',
  },
  letterSpacing: {
    xxs: '0px',
    xs: '0.15px',
    sm: '0.18px',
    md: '0.25px',
    lg: '0.5px',
    xl: '1.25px',
    xxl: '1.5px',
  },
  colors: {
    primary: '#4EADC5',
    darkHard: '#000000',
    darkMedium: '#121212',
    lightSoft: '#E0E0E0',
    lightMedium: '#324b72',
    lightHard: '#FFF',
    redMedium: '#DE212B',
  },
  fontFamily: {
    primary: `'Roboto', sans-serif`,
  },
  fontSize: {
    xxs: '8px',
    xs: '10px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },
  fontStyle: {
    normal: 'normal',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },

  mixins: {
    typography: {
      body1: css`
        font-weight: ${() => theme.fontWeight.regular};
        font-size: ${() => theme.fontSize.md};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
      `,
      overline: css`
        font-size: ${() => theme.fontSize.sm};
        font-weight: ${() => theme.fontWeight.medium};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        text-transform: uppercase;
      `,
      h2: css`
        font-size: ${() => theme.fontSize.xxl};
        font-weight: ${() => theme.fontWeight.light};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
      `,
      h4: css`
        font-size: ${() => theme.fontSize.md};
        font-weight: ${() => theme.fontWeight.regular};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
      `,
      button: css`
        font-size: ${() => theme.fontSize.md};
        font-weight: ${() => theme.fontWeight.medium};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
      `,
      input: css`
        padding: 11px 16px;
        border: 1px solid ${() => theme.colors.lightSoft};
        border-radius: 8px;
        line-height: 120%;
        font-size: ${() => theme.fontSize.sm};
        font-family: ${() => theme.fontFamily.primary};
        color: ${() => theme.colors.lightHard};

        &::placeholder {
          color: ${() => theme.colors.lightSoft};
        }

        &:focus {
          outline: none;
        }

        &--incorrect {
          color: rgba(${() => theme.colors.redMedium}, 0.4);
          border-color: ${() => theme.colors.redMedium};
        }

        &--incorrect::placeholder {
          color: rgba(${() => theme.colors.redMedium}, 0.4);
          border-color: ${() => theme.colors.redMedium};
        }
      `,
    },
  },
};
