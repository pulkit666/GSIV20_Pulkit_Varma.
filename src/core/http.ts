import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org';
const apiVersion = 3;
const apiKey = '2bc310a767cb835940c1a01691d937f6'

export const getMoviesList = (pageNumber: number) => {
    return axios.get(`${baseUrl}/${apiVersion}/movie/upcoming?api_key=${apiKey}&page=${pageNumber}`);
}

export const getMovieDetails = (id: number) => {
    return axios.get(`${baseUrl}/${apiVersion}/movie/${id}?api_key=${apiKey}`);
}

export const getMovieCast = (id: number) => {
    return axios.get(`${baseUrl}/${apiVersion}/movie/${id}/credits?api_key=${apiKey}`)
}