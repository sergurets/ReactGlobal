import reducer from '../reducers/index.js'

const initialState = {
    current: [],
    items: [],
    itemsHasError: false,
    itemsIsLoading: false
}

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: false})).toEqual(initialState)
  })

  it('Error reducer', () => {
    expect(
      reducer( initialState, {
        type: 'ITEMS_HAS_ERROR',
        hasErrored: 'error'
      })
    ).toEqual({
        current: [],
        items: [],
        itemsHasError: 'error',
        itemsIsLoading: false
    })
})

it('Loading reducer', () => {
    expect(
        reducer(initialState, {
          type: 'ITEMS_IS_LOADING',
          isLoading: 'loading'
        })
      ).toEqual({
        current: [],
        items: [],
        itemsHasError: false,
        itemsIsLoading: 'loading'
    })
})

it('Current item reducer', () => {
    expect(
        reducer(initialState, {
          type: 'CURRENT',
          current: {current: true}
        })
      ).toEqual({
        current: {current: true},
        items: [],
        itemsHasError: false,
        itemsIsLoading: false
    })
})

it('Current item reducer', () => {
    expect(
        reducer(initialState, {
          type: 'CURRENT',
          current: {current: true}
        })
      ).toEqual({
        current: {current: true},
        items: [],
        itemsHasError: false,
        itemsIsLoading: false
    })
})

it('Fetch data reducer', () => {
    expect(
        reducer(initialState, {
          type: 'ITEMS_FETCH_DATA_SUCCESS',
          items: {items: true}
        })
      ).toEqual({
        current: [],
        items: {items: true},
        itemsHasError: false,
        itemsIsLoading: false
    })
})

it('sort data reducer', () => {
    expect(
        reducer(initialState, {
          type: 'SORTING',
          items: {sort: true}
        })
      ).toEqual({
        current: [],
        items: {sort: true},
        itemsHasError: false,
        itemsIsLoading: false
    })
})
 
})