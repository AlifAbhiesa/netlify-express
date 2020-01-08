var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controller = require('./controller');

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

module.exports = app;