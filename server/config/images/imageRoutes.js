var imageController = require('./imageController');

module.exports = function(app){
  app.get('/images', imageController.getImages);
};
