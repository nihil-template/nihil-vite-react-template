import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HomePage, TestPage } from './pages';
import { store } from './store';

import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 600000,
      refetchInterval: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onError(error: AxiosError) {
        toast.error(`에러가 발생했습니다. ${error.message}`);
      },
    },
    mutations: {
      retry: 0,
      onError(error: AxiosError) {
        toast.error(`에러가 발생했습니다. ${error.message}`);
      },
    },
  },
});

const root = document.getElementById('root') as HTMLElement;

const routerApp = (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);

ReactDOM.createRoot(root).render(routerApp);
