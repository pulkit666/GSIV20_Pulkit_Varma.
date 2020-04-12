import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Cards.scss';

interface IProps {
    data: {
        poster: string,
        id: number,
        title: string,
        rating: number,
        description: string
    },
    history: {
        push: Function
    }
}

const Cards = (props: IProps) => {

    const clicked = (id: number) => {
        props.history.push(`/details:${id}`)
    }

    return (
        <div className="card__wrapper" onClick={() => clicked(props.data.id)}>
            <Thumbnail path={props.data.poster} style={{ marginTop: '0px' }}></Thumbnail>
            <div className="card__text">
                <label className="card-title">{props.data.title}</label>
                <label className="card-value">({props.data.rating})</label>
                <label className="card-description">{props.data.description}</label>
            </div>
        </div>
    )
}

export default Cards;