import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import './index.css';

const creatStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={creatStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app-body')
);
