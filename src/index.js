import { createRoot } from 'react-dom/client'
import React from 'react';
import { starti18n } from './i18n.js';
import App from './components/App.js';
import './tailwind.css';
import './index.scss';

starti18n();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
