import React from "react";
import { connect } from 'react-redux'
import { itemsFetchData, currentItem} from '../actions/actions.js';
import Item from "./item.js";
import { withRouter } from "react-router-dom";
import '../styles/full_info.css';

class FullInfo extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
        data: { title: '',
        release_date: '',
        genres: [''],
        runtime: 0,
        overview: '',
        poster_path: '',
        vote_average: 0}
       };
    }

    componentDidMount() {
       this.updateData();   
    }

    componentDidUpdate(nextProps) {
      if( nextProps.match.params.id !== this.props.match.params.id ) {
        this.updateData()
      } else {
        return false
      }
    }

    updateData() {
      var url = `http://react-cdp-api.herokuapp.com/movies/${this.props.match.params.id}`;
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data: data }, 
          () => {
            this.getGenres(this.state.data.genres);
            this.props.current(this.state.data);
            })
          )
    }

    getGenres(val) {
      var url = `https://reactjs-cdp.herokuapp.com/movies?filter=${encodeURIComponent(val.slice().toString())}&searchBy=genres`
      this.props.fetchData(url)
    }

    render() {
      const release_date = parseFloat(this.state.data.release_date);
      const genres = this.state.data.genres.length ? this.state.data.genres.reduce((sum, current) => {return sum + current + " & "}, '').slice(0,-3) : '';
      return (
        <React.Fragment>
          <div className="full_info">
            <div className="full_info_controls">
              <h2>Netflix search</h2>
              <button 
              className="searchButton" 
              onClick={() => this.props.history.push('/search')}>
              Search
              </button>
            </div>
            <div className="full_info_wrapper">
              <img src={this.state.data.poster_path}/>
              <div className="full_info_content">
                            <h1>{this.state.data.title}</h1>
                            <div className="content_data">
                                {release_date ? <span>{release_date}</span> : null}
                                {this.state.data.runtime ? <span>{this.state.data.runtime} min</span> : null}
                                {this.state.data.vote_average ? <span className="full_info_vote">{this.state.data.vote_average}</span> : null}
                            </div>
                            <p>{this.state.data.overview}</p>
            
                        </div>       
            </div>
            <div className="full_info-genres"><span>Films by {genres} genres</span></div>
          </div>
          <Item/>
        </React.Fragment>  
    );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url)),
      current: (item) => dispatch(currentItem(item)),
  };
};

export default connect(null,  mapDispatchToProps)(withRouter(FullInfo));
