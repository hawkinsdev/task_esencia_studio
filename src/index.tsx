import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// src/main.tsx
/* import { server } from "./mock/server";

if (process.env.NODE_ENV === "development") {
  server.listen();
} */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
