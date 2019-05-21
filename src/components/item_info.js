import React from "react";


function ItemInfo(props) {
    const genres = props.genres.reduce((sum, current) => {return sum + current + " & "}, '').slice(0,-3);
    const release_date = parseInt(props.release_date);
    return (
        <div className="">
         <div className="info_title">
            <span>{props.title}</span>
            <span className="release_date">{release_date}</span>
         </div>
            <span className="info_genres">
            {genres}
            </span>
        </div>
    );
}

ItemInfo.defaultProps = {
    title: '',
    release_date: '0',
    genres: ['']

};

export {ItemInfo}