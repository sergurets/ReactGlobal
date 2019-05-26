import { call, put, all, takeLatest } from 'redux-saga/effects';

// Actions
export function itemsHasError(bool) {
  return {
      type: 'ITEMS_HAS_ERROR',
      hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items
  };
}

export function sortItems(items, sortBy) {
  var data = items.data.slice().sort((a,b)=>{
      return parseFloat(b[sortBy])-parseFloat(a[sortBy])});
  return {
      type: 'SORTING',
      items: Object.assign({}, items, {data: data})
  };
}

export function currentItem(current) {
  return {
      type: 'CURRENT',
      current
  };
}

export function* itemsFetchData(url = "http://react-cdp-api.herokuapp.com/movies?") {
  yield put(itemsIsLoading(true));
  const response = yield call(fetch, url);
  const data = yield response.json();

  yield put(itemsFetchDataSuccess(data));
}


// Users Saga
export function* usersSaga() {
  yield all([
    itemsFetchData(),
  ]);
}

// Initial state
const initialState = {
  current: null,
  items: {
      data: []
  },
  itemsHasError: false,
  itemsIsLoading: false
}


//Reducers 

export const usersReduces = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ITEMS_HAS_ERROR':
            return action.hasErrored;
    case 'ITEMS_IS_LOADING':
            return action.isLoading;
    case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.items;
    case 'SORTING':
          return action.items;  
    case 'CURRENT':
          return action.current
    default:
          return state;
  }
};
