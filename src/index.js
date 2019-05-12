import React from "react";
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import App from "./components/App.js";
import Root from './Root';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

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

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Root  />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
