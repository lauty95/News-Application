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
const back = 'https://rodri-news.herokuapp.com'
const local = "http://localhost:3001"
axios.defaults.baseURL = back

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