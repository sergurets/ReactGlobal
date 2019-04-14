import { combineReducers } from 'redux';

function itemsHasError(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERROR':
            return action.hasErrored;

        default:
            return state;
    }
}

function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        case 'SORTING':
            return action.items;    
        default:
            return state;
    }
}

function current(state = [], action) {
    switch (action.type) {
        case 'CURRENT':
            return action.current
        default:
            return state;
    }
}

export default combineReducers({
    items,
    itemsHasError,
    itemsIsLoading,
    current
});