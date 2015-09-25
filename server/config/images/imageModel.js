var mongoose = require('mongoose');
var Q = require('q');

var ImageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('images', ImageSchema);
