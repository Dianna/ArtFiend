var Image = require('./imageModel');
var Q = require('q');

module.exports = {
  getImages: function(req, res, next){
    console.log('GET IMAGES IN IMAGECONTROLLER.JS');
    res.json('response from imageController')
  }
};
