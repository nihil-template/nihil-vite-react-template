import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, RtkTestPage, TestPage } from './pages';

import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

const root = document.getElementById('root') as HTMLElement;

const routerApp = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(root).render(routerApp);
