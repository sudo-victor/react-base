import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/styles/theme';
import Routes from './shared/components/routes';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './shared/styles/globalStyles';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <GlobalStyle />
          <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

