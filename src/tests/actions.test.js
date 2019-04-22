import * as actions from '../actions/actions.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('Error action', () => {
    const hasErrored = 'Error'
    const expectedAction = {
      type: 'ITEMS_HAS_ERROR',
      hasErrored
    }
    expect(actions.itemsHasError(hasErrored)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('Loading actions', () => {
    const isLoading = 'Loading'
    const expectedAction = {
      type: 'ITEMS_IS_LOADING',
      isLoading
    }
    expect(actions.itemsIsLoading(isLoading)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('Fetch data success', () => {
    const items = 'items'
    const expectedAction = {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items
    }
    expect(actions.itemsFetchDataSuccess(items)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('Add current item', () => {
    const current = 'item'
    const expectedAction = {
      type: 'CURRENT',
      current
    }
    expect(actions.currentItem(current)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('Add current item', () => {
    const items = {
      data: [{
        release_date: 1
      }, {
        release_date: 3
      }, {
        release_date: 2
      }]
    }

    const expectedAction = {
      type: 'SORTING',
      items: {
        data: [{
          release_date: 3
        }, {
          release_date: 2
        }, {
          release_date: 1
        }]
      }
    };
    const sortBy = 'release_date'

    expect(actions.sortItems(items, sortBy)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
    let store;
    let fetchData = [
      {
        "isLoading": true,
         "type": "ITEMS_IS_LOADING",
       },
        {
         "isLoading": false,
         "type": "ITEMS_IS_LOADING",
       }
    ];
    beforeEach(() => {
      store = mockStore({});
    });
    afterEach(() => {
      nock.cleanAll();
    });
  
    it('ITEMS_FETCH_DATA_SUCCESS', () => {

      nock('https://swapi.co/')
        .get('/api/people') 
        .reply(200, fetchData); 
  
      return store.dispatch(actions.itemsFetchData('https://swapi.co/api/people'))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        })
    })
  });