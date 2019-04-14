import React from "react";
import { connect } from 'react-redux';
import { currentItem , itemsFetchData } from '../actions/actions.js';

import ItemInfo from "./item_info.js";

import '../styles/item.css';

class Item extends React.Component {
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

  onClick(value) {
    this.props.current(value);
    var url = `https://reactjs-cdp.herokuapp.com/movies?filter=${encodeURIComponent(value.genres.slice().toString())}&searchBy=genres`
    this.props.fetchData(url)
  }

  render() {
    if (this.props.isLoading) {
      return <h3>Loading...</h3>;
    } else if(this.props.hasErrored)  {
      return <h3>Error</h3>;
    } else if(!this.props.data.length) {
      return <h3>No Films Found</h3>;
    } else {
      var data = this.props.data;
      if(this.props.currentId) {
        data = data.filter((el)=>el.id!==this.props.currentId)
      }
      return (
          <div>
            {this.props.currentId ? null : <h1>Films</h1>}
            <div className="search_results">
                {data.map((el)=>{ 
                return (<div className="search_Item" key={el.id} onClick={this.onClick.bind(this, el)}>
                <img src={el.poster_path}/>
                <ItemInfo title={el.title} release_date={el.release_date} genres={el.genres}/>
                </div>
                )})}
            </div>
          </div>
      );
    }  
  }  

}

Item.defaultProps = {
  data: [{
      title: '',
      id: '',
      poster_path: '',
      release_date: '0',
      genres: ['']
    }]
};

const mapStateToProps = (state) => {
  return {
      currentId: state.current ? state.current.id : null,
      data: state.items.data,
      hasErrored: state.itemsHasError,
      isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url)),
      current: (item) => dispatch(currentItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);