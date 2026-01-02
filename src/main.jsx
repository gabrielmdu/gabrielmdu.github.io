import React from 'react';
import { starti18n } from './i18n.js';
import './index.css';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';

starti18n();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
