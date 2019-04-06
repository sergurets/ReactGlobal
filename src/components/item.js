import React, { Component } from "react";

import ItemInfo from "./item_info.js";


import '../styles/item.css';

function clickItem() {
    console.log(this);
  }

function Item(props) {

  //  console.log(props)
    return (
        <div className="search_results">
            {props.data.map((el)=>{ 
            return (<div className="search_Item" key={el.id} onClick={clickItem.bind(el)}>
            <img src={el.poster_path}/>
            <ItemInfo title={el.title} release_date={el.release_date} genres={el.genres}/>
            </div>
            )})}

        </div>
    );
}

export default Item;