import React from "react";
import Item from "./item.js";
import Header from "./header.js";
import FullInfo from "./full_info.js";
import ErrorBoundary from "./error.js";
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions.js';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";

import '../styles/App.css';


/*import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';*/

const Posts = () => <p>Posts</p>;
const About = () => <p>About</p>;
const NotFound = () => <p>404 Not found</p>;

export class App extends React.Component {
  render() {
    return (
      <Router>
           <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/posts" component={Posts} />
            <Route path="/about" component={About} />
            <Route path="/film/:id" component={FullInfo} />
            <Route path="/search" component={Header} />
            <Route path="*" component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};


export default connect(null, mapDispatchToProps)(App);
/*

ReactDom.render(<App />, document.getElementById('app'));


const Posts = () => <p>Posts</p>;
const About = () => <p>About</p>;
const NoMatch = () => <p>404</p>;

export class App extends React.Component {

  componentDidMount() {
    this.props.fetchData('http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc')
  }

  render() {
    return (
      <div>
        <Link to="/posts">Posts</Link>
        <Link to="/films/447365">Film</Link>
         <Link to="/search/Search/54458477">Search</Link>
         <Switch>
           <Router>
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/films/:id" component={FullInfo} />
          <Route component={NoMatch} />
           </Router>
        </Switch>

      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};


export default connect(null, mapDispatchToProps)(App);*/

// export default App;*/

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({ value: value })
  }

  componentDidMount() {
    this.props.fetchData('http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc')
  }

  
  
  render() {
    return (
      <Router>
        <Link to="/about/">Home</Link>
        <Link to={`/film/${2}/`}>Films</Link>
          <Switch>
            <Route path="/film/" component={FullInfo} />  
            <Route path="/about/" component={Item} />  
          </Switch>
        {this.props.current ? (
        <div>
          <FullInfo/>
          <Item/>
        </div>) : (
        <div>
          <ErrorBoundary>
            <Header onClick = {this.onClick}/>
          </ErrorBoundary>
          <Item />
        </div>)}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      current: state.current
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;*/

