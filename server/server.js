var express = require('express');
var mongoose = require('mongoose');

var app = express();


require('./config/middleware.js')(app, express);

var mongoURI = "mongodb://localhost:27017/artFiend";
var db = mongoose.connect(mongoURI).connection;
db.on('error', function(err) { console.log(err.message); });
db.once('open', function() {
  console.log("mongodb connection open");
});

module.exports = app;