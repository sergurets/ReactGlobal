import React, { Component } from "react";

import '../styles/full_info.css';


function FullInfo(props) {

    console.log(props)
    return (
        <div className="full_info">
          <div className="full_info_controls">
            <h2>Netflix search</h2>
            <button className="mainSearchButton">Search</button>
          </div>
          <div className="full_info_wrapper">
            <img src={props.poster_path}/>
            <div className="full_info_content">
                <h1>{props.title}</h1>
                <div className="content_data">
                    <span className="">{props.release_date.slice(0,4)}</span>
                    {props.runtime ? <span className="">{props.runtime} min</span> : null}
                </div>
                <p className="">{props.overview}</p>

            </div>     
          </div>
        </div>  
    );
}

export default FullInfo;