'use-strict';
//use require instead of import. This is a javascript module, not React.
//we use Express to create a server

//First, we need to require express to import it in.
const express = require('express');
//We require dotenv and invoke the config.
require('dotenv').config();

//We then need to invoke Express and set it to a variable.
const app = express();

const PORT = process.env.PORT || 3002;

//LISTEN (start server)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
