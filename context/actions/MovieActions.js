const BaseURL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '1c806f1f768a2e0d31d46f2479a0ee17';
import axios, { Axios } from 'axios';

export const getMovies = async () => {
    let movies = [];
    try {
        const res = await axios.get(`${BaseURL}/popular?api_key=${API_KEY}`);
        movies = res.data.results;
    } catch (err) {
        console.log(err)
    }
    return {
        type:'ALL_MOVIES',
        payload:movies 
    }
}

export const movieDetails = async (id) => {
    const movieID = +(id);
    let Movie = {}
    try {
        const res = await axios.get(`${BaseURL}/${movieID}?api_key=${API_KEY}`)
        Movie = res.data;
    } catch (err) {
        console.log(err)
    }
    return {
        type:'MOVIE_DETAILS',
        payload:Movie 
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}