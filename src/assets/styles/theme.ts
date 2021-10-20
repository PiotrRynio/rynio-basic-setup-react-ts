import { css } from 'styled-components';
import { Theme } from './themeType';

export const theme: Theme = {
  breakpoints: {
    xxs: '400px',
    xs: '480px',
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
    primary: '#4eadc5',
    secondary: '#fff',
    primaryDark: '#324b72',
    darkHard: '#000000',
    darkMedium: '#111',
    lightMedium: '#fff',
    lightHard: '#FFF',
    redMedium: '#de212b',
  },
  fontFamily: {
    primary: `'Source Sans Pro', sans-serif`,
  },
  fontSize: {
    xxs: '8px',
    xs: '10px',
    sm: '12px',
    md: '14px',
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
    semiBold: '600',
    bold: '700',
  },

  mixins: {
    typography: {
      regular: css`
        font-weight: ${() => theme.fontWeight.regular};
        font-size: ${() => theme.fontSize.xs};
        color: ${() => theme.colors.darkMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};

        @media (min-width: ${() => theme.breakpoints.xxs}) {
          font-size: ${() => theme.fontSize.md};
        }
      `,
      overline: css`
        font-size: ${() => theme.fontSize.sm};
        font-weight: ${() => theme.fontWeight.regular};
        color: ${() => theme.colors.darkMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        text-transform: uppercase;
      `,
      heading2: css`
        font-size: ${() => theme.fontSize.xxl};
        font-weight: ${() => theme.fontWeight.light};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
      `,
      heading4: css`
        font-size: ${() => theme.fontSize.xs};
        font-weight: ${() => theme.fontWeight.bold};
        color: ${() => theme.colors.primary};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};

        @media (min-width: ${() => theme.breakpoints.xxs}) {
          font-size: ${() => theme.fontSize.md};
        }
      `,
      button: css`
        font-size: ${() => theme.fontSize.md};
        font-weight: ${() => theme.fontWeight.regular};
        color: ${() => theme.colors.lightMedium};
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
      `,
    },
    textInput: css`
      padding: 11px 8px 11px 16px;
      border: 1px solid ${() => theme.colors.primary};
      border-radius: 8px;
      line-height: 120%;
      font-size: ${() => theme.fontSize.md};
      font-family: ${() => theme.fontFamily.primary};
      color: ${() => theme.colors.primary};

      &::placeholder {
        color: rgba(${() => theme.colors.primaryDark}, 0.1);
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
};
