import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import dotenv from 'dotenv'
import { BrowserRouter } from 'react-router-dom';
import store from './store/'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack';

dotenv.config()
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={1}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);