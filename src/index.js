import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { theme } from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Slide, ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styles/Reset';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="/adaptive-website-Car-Rent-react-test-project">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Reset />
          <App />
          <ToastContainer autoClose={1000} hideProgressBar Transition={Slide} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </>
);
