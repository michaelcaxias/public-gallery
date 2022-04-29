import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import './index.css';
import { Provider } from './context/Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Form />
    </Provider>
  </React.StrictMode>,
);
