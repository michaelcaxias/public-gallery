import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from './context/Provider';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <Router />
  </Provider>,
);
