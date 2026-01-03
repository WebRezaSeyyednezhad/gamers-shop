// main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme.js';
import { createBrowserRouter } from 'react-router';

function Main() {
  const [mode, setMode] = useState('dark'); // 'dark' for default dark mode
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={() => setMode(mode === 'light' ? 'dark' : 'light')} mode={mode} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
