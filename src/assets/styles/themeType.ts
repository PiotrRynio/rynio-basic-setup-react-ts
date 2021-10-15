export type Theme = {
  mixins: {
    typography: {
      button: any;
      input: any;
      body1: any;
      h2: any;
      overline: any;
      h4: any;
    };
  };
  fontFamily: { primary: string };
  letterSpacing: {
    xxs: string;
    xl: string;
    md: string;
    sm: string;
    xs: string;
    lg: string;
    xxl: string;
  };
  fontSize: {
    xxs: string;
    xl: string;
    md: string;
    sm: string;
    xs: string;
    lg: string;
    xxl: string;
  };
  breakpoints: {
    xl: string;
    md: string;
    sm: string;
    lg: string;
    xxl: string;
  };
  fontStyle: {
    normal: string;
  };
  colors: {
    darkHard: string;
    redMedium: string;
    darkMedium: string;
    lightHard: string;
    lightSoft: string;
    primary: string;
    lightMedium: string;
  };
  fontWeight: {
    light: string;
    semiBold: string;
    medium: string;
    bold: string;
    regular: string;
  };
};
