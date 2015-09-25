var Image = require('./imageModel.js');
var Q = require('q');

module.exports = {
  getImages: function(req, res, next){
    var findAll = Q.nbind(Image.find, Image);
    findAll({})
      .then(function(images){
        res.json(images);
      })
      .fail(function(err){
        console.log('imageController error', err)
        next(err);
      });
  }
};
