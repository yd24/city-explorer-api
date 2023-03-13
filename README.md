# City-Explorer-API

**Author**: Daniel Yoon
**Version**: 1.4.0

## Overview
An API that returns weather data for location queries.

## Getting Started
* Have node.js and npm installed on your machine.
* Run npm install to install dependencies.
* Preferably have nodemon installed globally to see live server changes.
* Rename .env.sample file into .env and enter an available port for the server to run on.
* Use nodemon start to run server.

## Architecture
node.js, Express.js

## Change Log
03-07-2023 2:30pm - Application is running a basic Express server.

03-07-2023 4:30pm - Server can now take GET requests for weather data and send a response with forecast data, if available.

03-07-2023 9:31pm - Server now sends appropriate error responses.

03-09-2023 11:30pm - Server now requests data from Weatherbit and TheMovieDB API.

03-10-2023 9:00am - API requests split into own modules.

03-12-2023 12:00am - Server now caches data from API calls.


## Credit and Collaborations

WRRC Diagram with [Kameron Watts](https://github.com/KamWatts)

https://docs.google.com/drawings/d/1_CvravyRwd3dogjs-sYbc5xsz-ksrKmdT2H8cfMStZg/edit?usp=sharing

WRRC Diagram with [Thomas Lau](https://github.com/Rapib), [Anthony Keith](https://github.com/anthonykeith15)

https://docs.google.com/drawings/d/1Pgy-RX4twAlV0bjiKLaIKevERk3R_PDIQPdmRVly9Oc/edit?usp=sharing

WRRC Diagram with [Anthony Keith](https://github.com/anthonykeith15)
https://files.slack.com/files-pri/T039KG69K-F04TJ6CBJ1J/img_0032.jpg

## Feature 1: Weather

* Estimate of time needed to complete: 1 hour

* Start time: 2:30pm

* Finish time: 4:30pm

* Actual time needed to complete: 2 hours


## Feature 2: Errors

* Estimate of time needed to complete: 1 hour

* Start time: 9:00pm

* Finish time: 9:31pm

* Actual time needed to complete: 31 minutes

## Feature 3: Hooking up to Weatherbit and TheMovieDB API

* Estimate of time needed to complete: 2 hour

* Start time: 1:00pm

* Finish time: 4:00pm, 9:30pm-10:30pm

* Actual time needed to complete: 4 hours (had issues with free API limitations)

## Feature 4: Implement cache for API calls

* Estimate of time needed to complete: 1 hour

* Start time: 11:00pm

* Finish time: 12:00am

* Actual time needed to complete: 1 hour
