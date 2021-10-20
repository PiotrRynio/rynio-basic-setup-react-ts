import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { primaryFonts } from 'assets/styles/fonts';

const InitialHelmet = () => (
  <Helmet>
    <title>GoT API app</title>
    <link rel="stylesheet" href={primaryFonts} />
  </Helmet>
);

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <InitialHelmet />
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </ThemeProvider>{' '}
    </HelmetProvider>
  );
};

export default AppProviders;
