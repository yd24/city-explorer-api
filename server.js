'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const weather = require('./modules/weather.js');
const movies = require('./modules/movies.js');
const app = express();
app.use(cors());

app.get('/weather', weatherHandler);
app.get('/movies', movieHandler);

function weatherHandler(request, response) {
    const { latitude, longitude } = request.query;

    weather.getWeather(latitude, longitude)
        .then(summaries => {
            response.send(summaries);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).send('Sorry. Something went wrong!')
        });
}

function movieHandler(request, response, next) {
    movies.getMovies(request, next)
        .then(movies => {
            response.send(movies);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).send('Sorry. Something went wrong!')
        });
}

app.listen(process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));
