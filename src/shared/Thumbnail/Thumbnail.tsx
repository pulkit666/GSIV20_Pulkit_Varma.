import React from 'react';
import './Thumbnail.scss';

const Thumbnail = (props: any) => {

    return (
        <div className="thumbnail__wrapper" style={props.style}>
            <img src={`https://image.tmdb.org/t/p/w500${props.path}`} alt="poster" style={props.style}></img>
        </div>
    )
}

export default Thumbnail;