import React, { useEffect, useState } from 'react';
import { getMovieDetails, getMovieCast } from '../../core/http';
import './Details.scss';
import Header from '../../shared/Header/Header';
import Loader from '../../shared/loader/Loader';
import Thumbnail from '../../shared/Thumbnail/Thumbnail';

interface IProps {
    history: {
        push: Function,
        location: {
            pathname: string
        }
    },
    match: {
        path: string
        url: string
        isExact: boolean
        params: { id: string }
    }
}

interface MovieData {
    title: string,
    rating: number,
    released: number,
    runtime: string,
    image: string,
    description: string,
    director: string,
    cast: string
}

const Details = (props: IProps) => {
    const { id = '' } = props.match.params;

    const [movieDetails, setMovieDetails] = useState<MovieData>({
        title: '',
        rating: 0,
        released: 0,
        runtime: '',
        image: '',
        description: '',
        director: '',
        cast: ''
    });
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getDetails();
    }, [])

    const getDetails = async () => {
        try {
            const detailsResponse = await getMovieDetails(parseInt(id.split(':')[1]));
            const castResponse = await getMovieCast(parseInt(id.split(':')[1]));
            let details = {
                title: detailsResponse.data.title,
                rating: detailsResponse.data.vote_average,
                released: detailsResponse.data.release_date.split('-')[0],
                runtime: Math.floor(detailsResponse.data.runtime / 60) + ':' + detailsResponse.data.runtime % 60,
                image: detailsResponse.data.poster_path,
                description: detailsResponse.data.overview,
                director: '',
                cast: ''
            }
            const runTimeSplit: Array<string> = details.runtime.split(':')
            if (parseInt(runTimeSplit[0]) < 10)
                details.runtime = '0' + runTimeSplit[0] + ':' + runTimeSplit[1];
            if (parseInt(runTimeSplit[1]) < 10)
                details.runtime = runTimeSplit[0] + ': 0' + runTimeSplit[1];
            castResponse.data.crew.forEach((crewPerson: { department: string, name: string }) => {
                if (crewPerson.department === 'Directing')
                    details.director = crewPerson.name;
            });
            castResponse.data.cast.forEach((castPerson: { name: string }) => {
                if (details.cast === '')
                    details.cast = castPerson.name;
                else
                    details.cast += ', ' + castPerson.name;
            });

            setMovieDetails(details);
            setLoad(true);
        }
        catch (error) {
            setLoad(true);
            setError(true);
        }
    }

    if (load)
        return (
            <div className="details__wrapper">
                {error ? <div className="error">There is a connectivity issue. Please check your connection.</div> : <React.Fragment />}
                <Header history={props.history}></Header>
                <div className="details">
                    <Thumbnail path={movieDetails.image} style={{ height: '250px', width: '250px', borderRadius: '0px' }}></Thumbnail>
                    <div className="text__wrapper">
                        <label className="text-heading">{movieDetails.title}</label>
                        <label className="rating">({movieDetails.rating})</label>
                        <label className="block bold">{movieDetails.released} | {movieDetails.runtime} | {movieDetails.director}</label>
                        <span className="paragraph-style">
                            <label className="bold">Cast:</label>
                            <label className="align-right">{movieDetails.cast}</label>
                        </span>
                        <span className="paragraph-style">
                            <label className="bold">Description:</label>
                            <label className="align-right">{movieDetails.description}</label>
                        </span>
                    </div>
                </div>
            </div >
        )
    else
        return (
            <Loader></Loader>
        )
}

export default Details;