import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';

import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'
import AppProvider from './hooks';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import {standardtheme} from './styles/themes/standard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardtheme}>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='dark' />
    </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
