import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {App} from "./App.js";
import {appConnector} from "./connectors/appConnector.js"
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const initialState = {
    current: null,
    items: {},
    itemsHasError: false,
    itemsIsLoading: false
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

const AppConnected = appConnector(App)

ReactDOM.render(
    <Provider store={store}>
    <AppConnected/>
    </Provider>,
    document.getElementById("root")
);
