import React from "react";
import {Item} from "./components/item.js";
import {Header} from "./components/header.js";
import {FullInfo} from "./components/full_info.js";
import {fullInfoConnector} from "./connectors/fullInfoConnector.js";
import {itemConnector} from "./connectors/itemConnector.js"
import ErrorBoundary from "./components/error.js";
import { initialSearch } from './utilities/urls.js';

import './styles/App.css';

const FullInfoConnected = fullInfoConnector(FullInfo);
const ItemConnected = itemConnector(Item);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({ value: value })
  }

  componentDidMount() {
    this.props.fetchData(initialSearch())
  }
  
  render() {
    return (
      <div>
        {this.props.current ? (
        <div>
          <FullInfoConnected/>
          <ItemConnected/>
        </div>) : (
        <div>
          <ErrorBoundary>
            <Header onClick = {this.onClick}/>
          </ErrorBoundary>
          <ItemConnected />
        </div>)}
      </div>
    );
  }
}
/*
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


export default connect(mapStateToProps, mapDispatchToProps)(App);*/

export {App};
