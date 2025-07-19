// src/main.jsx
import React, { Suspense } from 'react'; // Precisa do Suspense
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './i18n'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* O App precisa estar dentro do Suspense */}
    <Suspense fallback={<div>Carregando...</div>}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
);