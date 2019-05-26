import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export function appConnector(App) { return connect(null, mapDispatchToProps)(App)};