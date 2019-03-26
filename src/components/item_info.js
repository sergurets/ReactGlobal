import React, { Component } from "react";

/*import '../styles/item_info.css';*/

function ItemInfo(props) {
//    console.log(props)
    return (
        <div className="">
         <div className="info_title">
            <span>Item {props.title}</span>
            <span className="release_date">{props.release_date.slice(0,4)}</span>
         </div>
            <span className="info_genres">{props.genres.reduce((sum, current) => {return sum + current + "&"}, '').slice(0,-1)}</span>
        </div>
    );
}

export default ItemInfo;