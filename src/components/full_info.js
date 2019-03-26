import React, { Component } from "react";

import '../styles/full_info.css';


function FullInfo(props) {

    console.log(props)
    return (
        <div className="full_info_wrapper">
        <img src={props.poster_path}/>
         <div className="full_info_content">
            <span>{props.title}</span>
            <span className="">{props.release_date.slice(0,4)}</span>
            <span className="">{props.overview}</span>
         </div>
            
        </div>
    );
}

export default FullInfo;