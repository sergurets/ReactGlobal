import React from "react";
import Search from "./search.js";
import Item from "./item.js";

import '../styles/header.css';

function Header(props) {
      return (
        <React.Fragment>
          <div className="header">
            <div className="header_content">
              <h2>Netflix search</h2>
              <h1>FIND YOUR MOVIE</h1>
              <Search {...props}/>
            </div>
          </div>
          <Item/>
        </React.Fragment>
      );
  }
  
  export default Header;