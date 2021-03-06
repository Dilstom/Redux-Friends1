import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
// import { setToken } from './token';

const store = createStore(reducer, applyMiddleware(thunk, logger));
// const store = createStore(reducer, applyMiddleware(setToken, thunk, logger));

ReactDOM.render(
 <Provider store={store}>
  <Router>
   <App />
  </Router>
 </Provider>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
