import React from "react";
import Item from "./item.js";
import Header from "./header.js";
import FullInfo from "./full_info.js";
import ErrorBoundary from "./error.js";
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions.js';

import '../styles/App.css';

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
      <div>
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
      </div>
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

// export default App;