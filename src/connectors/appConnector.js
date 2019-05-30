import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions.js';

const mapStateToProps = state => ({
  current: state.current,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
});


// export default connect(mapStateToProps, mapDispatchToProps)(App);

export function appConnector(App) { return connect(mapStateToProps, mapDispatchToProps)(App); }
