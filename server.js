'use-strict';

/***REQUIRE***/
//use require instead of import. This is a javascript module, not React.
//we use Express to create a server

//First, we need to require express to import it in.
const express = require('express');
const cors = require('cors');
const axios = require('axios');
//We require dotenv and invoke the config.
require('dotenv').config();

//We then need to invoke Express and set it to a variable.
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

/***ROUTES***/
//.get(URL, callback(req, res))

//default route
app.get('/', (req, res) => res.send('Hello world!'));

//weather route
app.get('/weather', async (req, res, next) => {
    try {
        let cityForecast = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily', {
            params: {
                lat: req.query.latitude,
                lon: req.query.longitude,
                key: process.env.WEATHER_API_KEY,
                days: 5
            }
        });
        let forecast = cityForecast.data.data.map(ele => new Forecast(ele));
        res.send(forecast);
    } catch (err) {
        console.log('Error in weather');
        next(err);
    }
});

app.get('/movies', async(req, res, next) => {
    try {
        let movies = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: req.query.searchQuery,
                api_key: process.env.MOVIE_API_KEY
            }
        });
        let allMovies = movies.data.results.map(movie => new Movie(movie));
        res.send(allMovies);
    } catch (err) {
        console.log('Error in movies');
        next(err);
    }
});

//error route
app.get('*', (req, res) => res.send('Resource not found'));

/***CLASS***/
class Forecast {
    constructor(data) {
        this.date = data.valid_date;
        this.description = `Low of ${data.low_temp}, High of ${data.high_temp} with ${data.weather.description}`;
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

/***LISTEN (start server)***/
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

