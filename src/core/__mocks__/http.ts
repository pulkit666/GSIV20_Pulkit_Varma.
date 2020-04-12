import axios from 'axios';

let moviesListCount = 0;
let moviesDetailsCount = 0;
let moviesCastCount = 0;

export const getMoviesList = (pageNumber: number) => {
    moviesListCount++;
    if (moviesListCount < 4)
        return Promise.resolve({
            data: {
                results: [{
                    popularity: 2,
                    vote_count: 234,
                    video: false,
                    poster_path: '/asds.png',
                    id: 123,
                    adult: false,
                    backdrop_path: './sds.png',
                    original_language: 'en',
                    original_title: 'Pulkit',
                    genre_ids: [1, 2, 3],
                    title: 'Mock',
                    vote_average: 2.3,
                    overview: 'Mocking',
                    release_date: '2020'
                }],
                total_pages: 3
            }
        });
    else if (moviesListCount === 4 || moviesListCount === 6)
        return Promise.reject({ error: 'Error' })
    else if (moviesListCount === 7)
        return Promise.resolve({
            data: {
                results: [{
                    popularity: 2,
                    vote_count: 234,
                    video: false,
                    poster_path: '/asds.png',
                    id: 123,
                    adult: false,
                    backdrop_path: './sds.png',
                    original_language: 'en',
                    original_title: 'Pulkit',
                    genre_ids: [1, 2, 3],
                    title: 'Mock',
                    vote_average: 2.3,
                    overview: 'Mocking',
                    release_date: '2020'
                }],
                total_pages: 1
            }
        });
    else
        return Promise.resolve({
            data: {
                results: [{
                    popularity: 2,
                    vote_count: 234,
                    video: false,
                    poster_path: '/asds.png',
                    id: 123,
                    adult: false,
                    backdrop_path: './sds.png',
                    original_language: 'en',
                    original_title: 'Pulkit',
                    genre_ids: [1, 2, 3],
                    title: 'Mock',
                    vote_average: 2.3,
                    overview: 'Mocking',
                    release_date: '2020'
                }],
                total_pages: 2
            }
        });
}

export const getMovieDetails = (id: number) => {
    moviesDetailsCount++;
    if (moviesDetailsCount === 1)
        return Promise.resolve({
            data: {
                "adult": false,
                "backdrop_path": "/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
                "belongs_to_collection": {
                    "id": 489724,
                    "name": "The Trolls Collection",
                    "poster_path": "/i4aII37O184x7K3dC7fpF9CAfS4.jpg",
                    "backdrop_path": "/9rmJzx7mfPgciyVGkKmsK5Lt5WV.jpg"
                },
                "budget": 0,
                "genres": [
                    { "id": 16, "name": "Animation" },
                    { "id": 10751, "name": "Family" },
                    { "id": 35, "name": "Comedy" },
                    { "id": 14, "name": "Fantasy" },
                    { "id": 12, "name": "Adventure" },
                    { "id": 10402, "name": "Music" }
                ],
                "homepage": "",
                "id": 446893,
                "imdb_id": "tt6587640",
                "original_language": "en",
                "original_title": "Trolls World Tour",
                "overview": "Queen Poppy and Branch make a surprising discovery",
                "popularity": 295.089,
                "poster_path": "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
                "production_companies": [
                    { "id": 521, "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png", "name": "DreamWorks Animation", "origin_country": "US" }],
                "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
                "release_date": "2020-03-12",
                "revenue": 0,
                "runtime": 694,
                "spoken_languages": [{ "iso_639_1": "en", "name": "English" }],
                "status": "Released",
                "tagline": "",
                "title": "Trolls World Tour",
                "video": false,
                "vote_average": 7.8,
                "vote_count": 80
            }
        });
    else if (moviesDetailsCount === 2)
        return Promise.resolve({
            data: {
                "adult": false,
                "backdrop_path": "/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
                "belongs_to_collection": {
                    "id": 489724,
                    "name": "The Trolls Collection",
                    "poster_path": "/i4aII37O184x7K3dC7fpF9CAfS4.jpg",
                    "backdrop_path": "/9rmJzx7mfPgciyVGkKmsK5Lt5WV.jpg"
                },
                "budget": 0,
                "genres": [
                    { "id": 16, "name": "Animation" },
                    { "id": 10751, "name": "Family" },
                    { "id": 35, "name": "Comedy" },
                    { "id": 14, "name": "Fantasy" },
                    { "id": 12, "name": "Adventure" },
                    { "id": 10402, "name": "Music" }
                ],
                "homepage": "",
                "id": 446893,
                "imdb_id": "tt6587640",
                "original_language": "en",
                "original_title": "Trolls World Tour",
                "overview": "Queen Poppy and Branch make a surprising discovery",
                "popularity": 295.089,
                "poster_path": "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
                "production_companies": [
                    { "id": 521, "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png", "name": "DreamWorks Animation", "origin_country": "US" }],
                "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
                "release_date": "2020-03-12",
                "revenue": 0,
                "runtime": 94,
                "spoken_languages": [{ "iso_639_1": "en", "name": "English" }],
                "status": "Released",
                "tagline": "",
                "title": "Trolls World Tour",
                "video": false,
                "vote_average": 7.8,
                "vote_count": 80
            }
        });
    else if (moviesDetailsCount === 3)
        return Promise.resolve({
            data: {
                "adult": false,
                "backdrop_path": "/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
                "belongs_to_collection": {
                    "id": 489724,
                    "name": "The Trolls Collection",
                    "poster_path": "/i4aII37O184x7K3dC7fpF9CAfS4.jpg",
                    "backdrop_path": "/9rmJzx7mfPgciyVGkKmsK5Lt5WV.jpg"
                },
                "budget": 0,
                "genres": [
                    { "id": 16, "name": "Animation" },
                    { "id": 10751, "name": "Family" },
                    { "id": 35, "name": "Comedy" },
                    { "id": 14, "name": "Fantasy" },
                    { "id": 12, "name": "Adventure" },
                    { "id": 10402, "name": "Music" }
                ],
                "homepage": "",
                "id": 446893,
                "imdb_id": "tt6587640",
                "original_language": "en",
                "original_title": "Trolls World Tour",
                "overview": "Queen Poppy and Branch make a surprising discovery",
                "popularity": 295.089,
                "poster_path": "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
                "production_companies": [
                    { "id": 521, "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png", "name": "DreamWorks Animation", "origin_country": "US" }],
                "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
                "release_date": "2020-03-12",
                "revenue": 0,
                "runtime": 601,
                "spoken_languages": [{ "iso_639_1": "en", "name": "English" }],
                "status": "Released",
                "tagline": "",
                "title": "Trolls World Tour",
                "video": false,
                "vote_average": 7.8,
                "vote_count": 80
            }
        });
    else if (moviesDetailsCount === 4)
        return Promise.reject({ error: 'Error' })
}

export const getMovieCast = (id: number) => {
    moviesCastCount++;
    if (moviesCastCount === 1)
        return Promise.resolve({
            data:
            {
                "id": 446893,
                "cast": [
                    { "cast_id": 3, "character": "Poppy (voice)", "credit_id": "58c7cfc0c3a3683dd700ae1f", "gender": 1, "id": 84223, "name": "Anna Kendrick", "order": 0, "profile_path": "/5ZYBQefB30uWObRzin8R0PYqenh.jpg" },
                    { "cast_id": 2, "character": "Branch (voice)", "credit_id": "58c7cfb19251417a1700bc8f", "gender": 2, "id": 12111, "name": "Justin Timberlake", "order": 2, "profile_path": "/hFfgtpXWlsbuzgwBKdRWdvrcRad.jpg" },
                    { "cast_id": 14, "character": "Cooper (voice)", "credit_id": "5af4b1ef0e0a265e44001ad9", "gender": 2, "id": 1260038, "name": "Ron Funches", "order": 3, "profile_path": "/f0DJiBdDZ7UD8rcZeig0Yv6Dkhj.jpg" }],
                "crew": [
                    { "credit_id": "5e925509ccb15f00156dedc3", "department": "Directing", "gender": 2, "id": 118489, "job": "Director", "name": "Walt Dohrn", "profile_path": "/uTTMPDK4qYQll5atL2qEHACdiaC.jpg" },
                    { "credit_id": "5e925509ccb15f00156dedc3", "department": "Producting", "gender": 2, "id": 118489, "job": "Production", "name": "Walt Dohrn", "profile_path": "/uTTMPDK4qYQll5atL2qEHACdiaC.jpg" }
                ]
            }
        });
    else if (moviesListCount === 2)
        return Promise.reject({ error: 'Error' })
}