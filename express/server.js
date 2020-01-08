// var express = require('express'),
//     app = express(),
//     bodyParser = require('body-parser'),
//     controller = require('./controller');

// var cors = require('cors');
// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require('./routes');
// routes(app);

// module.exports = app;

'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
var routes = require('./routes');


app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);