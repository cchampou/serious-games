import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globalStyles.css';

const rootDOMElement = document.getElementById('root');

if (rootDOMElement) {
  const root = createRoot(rootDOMElement);
  root.render(<App />);
}
