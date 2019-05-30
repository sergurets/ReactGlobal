import { connect } from 'react-redux';
import { itemsFetchData, currentItem } from '../actions/actions';

const mapStateToProps = (state) => {
  const {
    runtime, overview, release_date, title, poster_path, genres, vote_average,
  } = state.current;
  return {
    runtime, overview, release_date, title, poster_path, genres, vote_average,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  current: item => dispatch(currentItem(item)),
});


export function fullInfoConnector(FullInfo) { return connect(mapStateToProps, mapDispatchToProps)(FullInfo); }
