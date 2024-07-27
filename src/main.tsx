import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from '@/src/pages';

const root = document.getElementById('root') as HTMLElement;

const routerApp = (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

ReactDOM.createRoot(root).render(routerApp);
