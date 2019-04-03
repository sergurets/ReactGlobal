import React, { Component } from "react";

import '../styles/search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onClick = () => {
          props.onClick(this.state.value);
        }
      }
    
      handleChange(event) {
        this.setState({value: event.target.value}); 
      }

    render() {
     // console.log(this)
      return (
        <div className="search">
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <div className="searchButtons">
            <button onClick={this.onClick}>
            Title
            </button>
            <button onClick={this.onClick}>
            Ganre
            </button>
            <button onClick={this.onClick}>
            Search
            </button>
          </div>

        </div>
      );
    }
  }
  
  export default Search;