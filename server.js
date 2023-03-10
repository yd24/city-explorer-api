'use-strict';

/***REQUIRE***/
//use require instead of import. This is a javascript module, not React.
//we use Express to create a server

//First, we need to require express to import it in.
const express = require('express');
const cors = require('cors');
const getWeather = require('./modules/weather');
const getMovies = require('./modules/movies');

//We require dotenv and invoke the config.
require('dotenv').config();

//We then need to invoke Express and set it to a variable.
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

/***ROUTES***/

//default route
app.get('/', (req, res) => res.send('Hello world!'));
//weather route
app.get('/weather', getWeather);
//movie route
app.get('/movies', getMovies);
//invalid route
app.get('*', (req, res) => res.send('Resource not found'));

/***LISTEN (start server)***/
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

