import React, { Component } from "react";
import Item from "./item.js";
import Header from "./header.js";
import FullInfo from "./full_info.js";
import ErrorBoundary from "./error.js";

import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      className: "App",
      search: true,
      data: [
        {
          budget:null,
          genres:[],
          id:null,
          overview:'',
          poster_path:null,
          release_date:"",
          revenue:null,
          runtime:null,
          tagline: null,
          title:null,
          vote_average:null,
          vote_count:null
        }      
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  getData(value) {
    var data = !!value ? value.trim() : '';
//    console.log(data)
    var url = !!data ?
    `http://react-cdp-api.herokuapp.com/movies?search=${encodeURIComponent(data)}&searchBy=title` :
    'http://react-cdp-api.herokuapp.com/movies';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }))
    //  .then(console.log(this.state.data))
  }


  onClick(value) {
    this.setState({ value: value })
    this.getData(value)
    //console.log(value, this)
  }

  componentDidMount() {
    this.getData(); 
  }

  //?search=zoo&searchBy=title
  
  render() {
    var firstElement=this.state.data[0];
    return (
      <div>
        <ErrorBoundary>
          <Header onClick = {this.onClick}/>
        </ErrorBoundary>
        <h1>Films</h1>
        {this.state.data.length ? (
        <div>
        <Item data={this.state.data}/> 
        <FullInfo 
        overview={firstElement.overview} 
        title={firstElement.title} 
        runtime={firstElement.runtime}
        release_date={firstElement.release_date}  
        poster_path={firstElement.poster_path}/>
        </div>) : <span>NO DATA</span>}

      </div>
    );
  }
}

export default App;