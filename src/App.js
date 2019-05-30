import React from 'react';
import { Item } from './components/item';
import { Header } from './components/header';
import { FullInfo } from './components/full_info';
import { fullInfoConnector } from './connectors/fullInfoConnector';
import { itemConnector } from './connectors/itemConnector';
import { initialSearch } from './utilities/urls.ts';

import './styles/App.css';

const FullInfoConnected = fullInfoConnector(FullInfo);
const ItemConnected = itemConnector(Item);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({ value });
  }

  componentDidMount() {
    this.props.fetchData(initialSearch());
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
            <Header onClick = {this.onClick}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(App); */

export { App };
