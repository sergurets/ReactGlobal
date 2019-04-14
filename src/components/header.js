import React from "react";
import Search from "./search.js";

import '../styles/header.css';

function Header() {
      return (
        <div className="header">
          <div className="header_content">
            <h2>Netflix search</h2>
            <h1>FIND YOUR MOVIE</h1>
            <Search/>
          </div>
        </div>
      );
  }
  
  export default Header;