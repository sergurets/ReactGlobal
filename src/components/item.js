import React from 'react';
import { initialSearchByGenres } from '../utilities/urls.ts';
import { ItemInfo } from './item_info';
import '../styles/item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.props.current(value);
    this.props.fetchData(initialSearchByGenres(value));
  }

  render() {
    if (this.props.isLoading) return <h3>Loading...</h3>;
    if (this.props.hasErrored) return <h3>Error</h3>;
    if (!this.props.data.length) return <h3>No Films Found</h3>;
    let { data } = this.props;
    if (this.props.currentId) {
      data = data.filter(el => el.id !== this.props.currentId);
    }
    return (
          <div>
            {this.props.currentId ? null : <h1>Films</h1>}
            <div className="search_results">
                {data.map(el => (<div className="search_Item" key={el.id} onClick={this.onClick.bind(this, el)}>
                <img src={el.poster_path}/>
                <ItemInfo title={el.title} release_date={el.release_date} genres={el.genres}/>
                </div>
                ))}
            </div>
          </div>
    );
  }
}

Item.defaultProps = {
  data: [{
    title: '',
    id: '',
    poster_path: '',
    release_date: '0',
    genres: [''],
  }],
};

export { Item };
