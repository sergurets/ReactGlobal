import { connect } from 'react-redux';
import { itemsFetchData, currentItem, sortItems } from '../actions/actions';

const mapStateToProps = state => ({
  total: state.items.total,
  items: state.items,
  hasErrored: state.itemsHasError,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  current: item => dispatch(currentItem(item)),
  sortBy: (item, sort) => dispatch(sortItems(item, sort)),
});


export function searchConnector(Search) { return connect(mapStateToProps, mapDispatchToProps)(Search); }
