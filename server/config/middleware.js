var morgan = require('morgan');
var bodyParser = require('body-parser');
var helpers = require('./helpers');

module.exports = function(app, express){
  var imageRouter = express.Router();
  var scrapeRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(express.static(__dirname+'/../../client/'));
  app.use('/dist', express.static(__dirname+'/../../dist/'));
  app.use('/bower_components', express.static(__dirname+'/../../bower_components/'));
  app.use('/images', imageRouter);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // app.use('/app', express.static(__dirname+'/client/app/'));
  // app.use('/gallery', express.static(__dirname+'/client/app/gallery/'));

  require('../images/imageRoutes.js')(imageRouter);
};

