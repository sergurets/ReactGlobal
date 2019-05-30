import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { App } from './App';
import { appConnector } from './connectors/appConnector';

import rootReducer from './reducers/index';

const initialState = {
  current: null,
  items: {},
  itemsHasError: false,
  itemsIsLoading: false,
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

const AppConnected = appConnector(App);

ReactDOM.render(
    <Provider store={store}>
    <AppConnected/>
    </Provider>,
    document.getElementById('root'),
);
