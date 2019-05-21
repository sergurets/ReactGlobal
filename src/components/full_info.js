import React from "react";
import '../styles/full_info.css';


class FullInfo extends React.Component {
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    };

    onClick() {
      this.props.current(null);
    }

    render() {
      const release_date = parseFloat(this.props.release_date);
      const genres = this.props.genres.reduce((sum, current) => {return sum + current + " & "}, '').slice(0,-3);
      return (
          <div className="full_info">
            <div className="full_info_controls">
              <h2>Netflix search</h2>
              <button onClick={this.onClick} className="searchButton">Search</button>
            </div>
            <div className="full_info_wrapper">
              <img src={this.props.poster_path}/>
              <div className="full_info_content">
                  <h1>{this.props.title}</h1>
                  <div className="content_data">
                      <span>{release_date}</span>
                      {this.props.runtime ? <span>{this.props.runtime} min</span> : null}
                      {this.props.vote_average ? <span className="full_info_vote">{this.props.vote_average}</span> : null}
                  </div>
                  <p>{this.props.overview}</p>
  
              </div>     
            </div>
            <div className="full_info-genres"><span>Films by {genres} genres</span></div>
            <div>

            </div>
          </div>  
      );
    }
  }

FullInfo.defaultProps = {
    title: '',
    release_date: '',
    genres: [''],
    runtime: '',
    overview: '',
    poster_path: '',
    vote_average: 0

};  

export {FullInfo};