import axios from 'axios';
import { getMoviesList, getMovieDetails, getMovieCast } from './http';

jest.mock('axios');

describe('http Service', () => {
    it('fetches Movies List successfully data from an API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a',
                    },
                    {
                        objectID: '2',
                        title: 'b',
                    },
                ],
            },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getMoviesList(1)).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=2bc310a767cb835940c1a01691d937f6&page=${1}`,
          );
    });
    it('fetches Movies List erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getMoviesList(1)).rejects.toThrow(errorMessage);
    });
    it('fetches Movies Details successfully data from an API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a',
                    },
                    {
                        objectID: '2',
                        title: 'b',
                    },
                ],
            },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getMovieDetails(1)).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(
            `https://api.themoviedb.org/3/movie/${1}?api_key=2bc310a767cb835940c1a01691d937f6`,
          );
    });
    it('fetches Movies Details erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getMovieDetails(1)).rejects.toThrow(errorMessage);
    });
    it('fetches Movies Cast successfully data from an API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a',
                    },
                    {
                        objectID: '2',
                        title: 'b',
                    },
                ],
            },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getMovieCast(2)).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(
            `https://api.themoviedb.org/3/movie/${2}/credits?api_key=2bc310a767cb835940c1a01691d937f6`,
          );
    });
    it('fetches Movies List erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getMovieCast(1)).rejects.toThrow(errorMessage);
    });
});