import React from 'react';
import { Search } from './search';
import { searchConnector } from '../connectors/searchConnector';

import '../styles/header.css';

const SearchConnected = searchConnector(Search);

function Header() {
  return (
        <div className="header">
          <div className="header_content">
            <h2>Netflix search</h2>
            <h1>FIND YOUR MOVIE</h1>
            <SearchConnected/>
          </div>
        </div>
  );
}

export { Header };
