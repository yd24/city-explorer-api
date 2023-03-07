'use-strict';

/***REQUIRE***/
//use require instead of import. This is a javascript module, not React.
//we use Express to create a server

//First, we need to require express to import it in.
const express = require('express');
const weather = require('./data/weather.json');
//We require dotenv and invoke the config.
require('dotenv').config();

//We then need to invoke Express and set it to a variable.
const app = express();
const PORT = process.env.PORT || 3002;

/***ROUTES***/
//.get(URL, callback(req, res))

//default route
app.get('/', (req, res) => res.send('Hello world!'));

//weather route
app.get('/weather', (req, res) => {
    let search = req.query.searchQuery;
    let city = weather.find(ele => search.toLowerCase() === ele.city_name.toLowerCase());
    let forecastDays = city.data.map(ele => new Forecast(ele));
    res.send(forecastDays);
});

//error route
app.get('*', (req, res) => res.send('Resource not found'));

/***CLASS***/
class Forecast {
    constructor(data) {
        this.date = data.valid_date;
        this.description = data.weather.description
    }
}

/***LISTEN (start server)***/
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

