import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { HallEnvironment } from './components/HallEnvironment';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <CssBaseline />
      <HallEnvironment />
    </React.StrictMode>
  );
}
