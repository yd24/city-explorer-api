'use-strict';

const axios = require('axios');

async function getWeather(req, res) {
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
        res.send(forecast).status(200);
    } catch (err) {
        console.log('Error in weather');
    }
}

class Forecast {
    constructor(data) {
        this.date = data.valid_date;
        this.description = `Low of ${data.low_temp}, High of ${data.high_temp} with ${data.weather.description}`;
    }
}

module.exports = getWeather;
