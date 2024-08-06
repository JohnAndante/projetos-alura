import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import store from './store'
import { createStandaloneToast } from '@chakra-ui/toast'
import './index.css';

const { ToastContainer, toast } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>
  // </React.StrictMode>
);
