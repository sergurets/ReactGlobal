import React   from "react";
import { sortBy, detailedSearch } from '../utilities/urls.js';

import '../styles/search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         value: '',
         search: 'title' ,
         sortBy: 'release_date'
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
        var data = !!this.state.value ? this.state.value.trim() : '';
        var url = !!data ? detailedSearch(data, this.state) : sortBy(this.state.sortBy);
        this.props.fetchData(url);
        this.props.current(null);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value}); 
      }

      searchByGenre() {
        this.setState({search: 'genres'}); 
      }

      searchByTitle() {
        this.setState({search: 'title'}); 
      }

      sortByReleaseDate() {
        this.setState({sortBy: 'release_date'}, () => this.props.sortBy(this.props.items, this.state.sortBy)); 
      }

      sortByRating() {
        this.setState({sortBy: 'vote_average'}, () => this.props.sortBy(this.props.items, this.state.sortBy)); 
      }

      keyPress(event){
        if(event.keyCode == 13){
          this.onClick();
        }
      } 

    render() {
      var searchByTitle = this.state.search === 'title';
      var sortByDate = this.state.sortBy === 'release_date';
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
  
export {Search};