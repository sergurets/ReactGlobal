// @flow

const baseURL: string  = 'https://reactjs-cdp.herokuapp.com/movies?';

export const initialSearchByGenres = (value: {genres: Array<number | string>}): string => {
    return `${baseURL}filter=${encodeURIComponent(value.genres.slice().toString())}&searchBy=genres`; 
}

export const initialSearch = (): string => {
    return `${baseURL}sortBy=release_date&sortOrder=desc`;
}

export const sortBy = (value: string): string => {
    return `http://react-cdp-api.herokuapp.com/movies?sortBy=${value}&sortOrder=desc`
}

export const detailedSearch = (query: string, param: {search: string, sortBy: string}): string => {
    return `${baseURL}search=${encodeURIComponent(query)}&searchBy=${param.search}&sortBy=${param.sortBy}&sortOrder=desc`
}
