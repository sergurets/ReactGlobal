import React   from "react";
import { connect } from 'react-redux'
import { itemsFetchData, currentItem, sortItems } from '../actions/actions.js';
import  queryString  from 'query-string';

import '../styles/search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         value: '',
         queryParam: Object.assign(
          {searchBy: 'title' ,
           sortBy: 'release_date',
           sortOrder: 'desc'},
           queryString.parse(props.location.search)
           )
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this)
        this.keyPress = this.keyPress.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
        this.searchByGenre = this.searchByGenre.bind(this);
        this.sortByReleaseDate=this.sortByReleaseDate.bind(this);
        this.sortByRating=this.sortByRating.bind(this);
      }

      onClick() {
        var url = `http://react-cdp-api.herokuapp.com/movies?${queryString.stringify(this.state.queryParam)}`;
        this.props.fetchData(url);
        this.props.current(null);
        this.props.history.push(`/search?${queryString.stringify(this.state.queryParam)}`)
      }

      componentDidMount(){
        const url = queryString.stringify(queryString.parse(this.props.location.search));
        url ? this.props.fetchData(`http://react-cdp-api.herokuapp.com/movies?${url}`) : null;
      }
    
      handleChange(event) {
        this.setState({
          value: event.target.value, 
          queryParam: Object.assign({},this.state.queryParam, {search: encodeURI(event.target.value)})
        }); 
      }

      searchByGenre() {
        this.setState({queryParam: Object.assign({},this.state.queryParam, {searchBy: 'genres'})})
      }

      searchByTitle() {
        this.setState({queryParam: Object.assign({},this.state.queryParam, {searchBy: 'title'})})
      }

      sortByReleaseDate() {
        this.setState({queryParam: Object.assign({},this.state.queryParam, {sortBy: 'release_date'})},
        () => this.props.sortBy(this.props.items, this.state.queryParam.sortBy))
      }

      sortByRating() {
        this.setState({queryParam: Object.assign({},this.state.queryParam, {sortBy: 'vote_average'})},
        () => this.props.sortBy(this.props.items, this.state.queryParam.sortBy))
      }

      keyPress(event){
        if(event.keyCode == 13){
          this.onClick();
        }
      } 

    render() {
      console.log('search', this, queryString.parse(this.props.location.search), this.props.location.search)
      var searchByTitle = this.state.queryParam.searchBy === 'title';
      var sortByDate = this.state.queryParam.sortBy === 'release_date';
      return (
        <div className="search">
          <div className="search_controls">
            <input
             id="mainSearch"
             type="text"
             value={this.state.value}
             onChange={this.handleChange}
             onKeyDown={this.keyPress}/>
            <div className="searchButtons">
              <div className="searchFilter">
                <span>SEARCH BY</span>
                <button 
                 onClick={this.searchByTitle}
                 className={searchByTitle ? "active" : ""}>
                 TITLE
                </button>
                <button 
                 onClick={this.searchByGenre}
                 className={searchByTitle ?  "" : "active"}>
                 GENRE
                </button>
              </div>
              <button className="mainSearchButton" onClick={this.onClick}>
               Search
              </button>
            </div>
          </div>

        <div className="sort_data">
          <div className="genres">
            <span>{this.props.total} movies found</span>
          </div>
          <div className="sort_buttons">
            <span>Sort by</span>
            <span 
              onClick={this.sortByReleaseDate}
              className={sortByDate ? "active" : ""}>
              release date
            </span>
            <span 
              onClick={this.sortByRating}
              className={sortByDate ? "" : "active"}>
              rating
            </span>
          </div>
          </div>  
        </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
  return {
      total: state.items.total,
      items: state.items,
      hasErrored: state.itemsHasError,
      isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url)),
      current: (item) => dispatch(currentItem(item)),
      sortBy: (item, sort) => dispatch(sortItems(item, sort))
  };
};


export default connect(mapStateToProps,  mapDispatchToProps)(Search);