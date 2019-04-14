import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./components/App.js";
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

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root")
);
