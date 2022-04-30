import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from './context/Provider';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Router />
    </Provider>
  </React.StrictMode>,
);
