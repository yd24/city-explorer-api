'use-strict';
//use require instead of import. This is a javascript module, not React.
//we use Express to create a server

//First, we need to require express to import it in.
const express = require('express');

//We then need to invoke Express and set it to a variable.
const app = express();

console.log('Hello World!');
