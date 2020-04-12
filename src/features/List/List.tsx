import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMoviesList } from '../../core/http';
import './List.scss';
import Cards from '../../shared/Cards/Cards';
import Header from '../../shared/Header/Header';
import Loader from '../../shared/loader/Loader';

interface IProps {
    history: {
        push: Function,
        location: {
            pathname: string
        }
    },
    filterValue: string
}

interface MoviesData {
    poster: string,
    id: number,
    title: string,
    rating: number,
    description: string
}

interface ApiResponse {
    popularity: number,
    vote_count: number,
    video: boolean,
    poster_path: string,
    id: number,
    adult: false,
    backdrop_path: string,
    original_language: string,
    original_title: string,
    genre_ids: Array<number>,
    title: string,
    vote_average: number,
    overview: string,
    release_date: string
}

const List = (props: IProps) => {

    const [moviesData, setMoviesData] = useState<Array<MoviesData>>([]);
    const [data, setData] = useState<Array<MoviesData>>([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getList();
    }, [])

    useEffect(() => {
        if (props.filterValue !== '') {
            if (props.filterValue === 'all')
                setMoviesData(data);
            else {
                let filteredData: Array<MoviesData> = [];
                data.forEach((element: MoviesData) => {
                    if (element.title.toLowerCase().includes(props.filterValue))
                        filteredData.push(element);
                })
                setMoviesData(filteredData)
            }
        }
    }, [props.filterValue])

    const getList = async () => {
        try {
            const response = await getMoviesList(1);
            const resultData: Array<ApiResponse> = response.data.results;
            const pages: number = response.data.total_pages;
            const moviesData: Array<MoviesData> = [];
            generateData(resultData, moviesData);
            if (pages > 1)
                getPagesData(pages, moviesData);
            else
                return;
        }
        catch (error) {
            setLoad(true);
            setError(true);
        }
    }

    const getPagesData = async (pages: number, moviesData: Array<MoviesData>) => {
        try {
            for (let i = 2; i <= pages; i++) {
                const response = await getMoviesList(i);
                generateData(response.data.results, moviesData);
            }
            setMoviesData(moviesData);
            setData(moviesData);
            setLoad(true);
        }
        catch (error) {
            setLoad(true);
            setError(true);
        }
    }

    if (load)
        return (
            < div className="master__wrapper" >
                {error ? <div className="error">There is a connectivity issue. Please check your connection.</div> : <React.Fragment />}
                <Header history={props.history}></Header>
                <div className="list">
                    {moviesData.map((data, index) => <Cards key={data.id} data={data} history={props.history} />)}
                </div>
            </div >
        )
    else
        return (
            <Loader></Loader>
        )
}

export const generateData = (resultData: Array<ApiResponse>, moviesData: Array<MoviesData>) => {
    resultData.forEach((element: ApiResponse) => {
        let data = {
            poster: element.poster_path,
            id: element.id,
            title: element.title,
            rating: element.vote_average,
            description: element.overview
        }
        moviesData.push(data);
    });
}


export const mapStateToProps = (state: { filterType: string }) => {
    return {
        filterValue: state.filterType
    }
}

export default connect(mapStateToProps, null)(List);