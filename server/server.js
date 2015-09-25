var express = require('express');
var mongoose = require('mongoose');

var app = express();
var db = mongoose.connect('mongodb://localhost/artFiend');

require('./config/middleware.js')(app, express);

module.exports = app;