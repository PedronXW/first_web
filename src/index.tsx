import { X } from '@phosphor-icons/react';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueuesProvider } from './contexts/QueuesContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <SnackbarProvider 
      maxSnack={4}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={400000}
      action={(snackbarId:any) => (
        <button onClick={() => closeSnackbar(snackbarId)}>
          <X size={20}/>
        </button>
      )}>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <QueuesProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </QueuesProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

reportWebVitals();
