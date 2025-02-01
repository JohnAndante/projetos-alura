import React from 'react';
import Router from './routes';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
