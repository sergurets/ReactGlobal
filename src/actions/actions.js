import fetch from 'isomorphic-fetch'

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
    console.log('current', current)
    return {
        type: 'CURRENT',
        current
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasError(true)));
    };
}
