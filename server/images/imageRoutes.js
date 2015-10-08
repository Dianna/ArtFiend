var imageController = require('./imageController.js');

module.exports = function(imageRouter){
  imageRouter.use(function(req, res, next){
    console.log('router req method:req url: ', req.method,':', req.url)
    next();
  });
  imageRouter.get('/scrape', imageController.getImages);
};
