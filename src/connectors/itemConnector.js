import { connect } from 'react-redux';
import { currentItem, itemsFetchData } from '../actions/actions';

const mapStateToProps = state => ({
  currentId: state.current ? state.current.id : null,
  data: state.items.data,
  hasErrored: state.itemsHasError,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  current: item => dispatch(currentItem(item)),
});

export function itemConnector(Item) { return connect(mapStateToProps, mapDispatchToProps)(Item); }
