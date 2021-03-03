import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './router';
import './styles.css'
import history from './utils/history'
import { Provider } from 'react-redux';
import configureStore from './redux/store'

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
