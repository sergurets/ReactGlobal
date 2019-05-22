import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./App.js";
import {appConnector} from "./connectors/appConnector.js"
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const initialState = {
    current: null,
    items: {
        data: []
    },
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
        <BrowserRouter>
            <AppConnected/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
