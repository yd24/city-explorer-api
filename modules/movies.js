'use-strict';

const express = require('express');
const axios = require('axios');

async function getMovies(req, res, next) {
    try {
        let movies = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: req.query.searchQuery,
                api_key: process.env.MOVIE_API_KEY
            }
        });
        let allMovies = movies.data.results.map(movie => new Movie(movie));
        res.send(allMovies).status(200);
    } catch (err) {
        next(err);
    }
}

class Movie {
    constructor(data) {
        this.title = data.title;
        this.overview = data.overview;
        this.average_votes = data.vote_average;
        this.total_votes = data.vote_count;
        this.image_url = data.poster_path || '';
        this.popularity = data.popularity;
        this.released_on = data.release_date;
    }
}

module.exports = getMovies;
