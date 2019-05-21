const baseURL = 'https://reactjs-cdp.herokuapp.com/movies?';

export const initialSearchByGenres = (value) => {
    return `${baseURL}filter=${encodeURIComponent(value.genres.slice().toString())}&searchBy=genres`; 
}

export const initialSearch = () => {
    return `${baseURL}sortBy=release_date&sortOrder=desc`;
}

export const sortBy = (value) => {
    return `http://react-cdp-api.herokuapp.com/movies?sortBy=${value}&sortOrder=desc`
}

export const detailedSearch = (query, param) => {
    return `${baseURL}search=${encodeURIComponent(query)}&searchBy=${param.search}&sortBy=${param.sortBy}&sortOrder=desc`
}
